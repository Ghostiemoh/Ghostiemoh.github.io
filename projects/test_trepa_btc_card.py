import pytest
import multiprocessing
import http.server
import socketserver
import time
from playwright.sync_api import sync_playwright

PORT = 8002

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)

def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()

@pytest.fixture(scope="session", autouse=True)
def server():
    p = multiprocessing.Process(target=start_server)
    p.start()
    time.sleep(1) # wait for server to start
    yield
    p.terminate()
    p.join()

def test_btc_prediction_card_initial_state():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"http://localhost:{PORT}/projects/Trepa.html")
        page.wait_for_selector("#btcPredictionSlider")

        stake = page.locator("#btcStakeAmount").text_content()
        assert stake == "$50"

        # Initial slider value is 65. Outcome is 70. Diff is 5.
        # multiplier = 1.8. Reward = 50 * 1.8 = 90.00
        reward = page.locator("#btcPotentialReward").text_content()
        assert reward == "$90.00"

        browser.close()

def test_btc_prediction_card_update():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"http://localhost:{PORT}/projects/Trepa.html")
        page.wait_for_selector("#btcPredictionSlider")

        # Change slider to 70. Diff is 0.
        # multiplier = 2.5. Reward = 50 * 2.5 = 125.00
        page.locator("#btcPredictionSlider").fill("70")

        # Fire input event since fill triggers input but we should ensure it triggers our listener
        page.evaluate("document.getElementById('btcPredictionSlider').dispatchEvent(new Event('input'))")

        stake = page.locator("#btcStakeAmount").text_content()
        assert stake == "$50"

        reward = page.locator("#btcPotentialReward").text_content()
        assert reward == "$125.00"

        # Change slider to 100. Diff is 30.
        # multiplier = 0.4. Reward = 50 * 0.4 = 20.00
        page.locator("#btcPredictionSlider").fill("100")
        page.evaluate("document.getElementById('btcPredictionSlider').dispatchEvent(new Event('input'))")

        reward = page.locator("#btcPotentialReward").text_content()
        assert reward == "$20.00"

        browser.close()
