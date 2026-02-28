import pytest
from playwright.sync_api import sync_playwright
import subprocess
import time
import urllib.parse
import os

import socket

def get_free_port():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind(('', 0))
    port = s.getsockname()[1]
    s.close()
    return port

@pytest.fixture(scope="module")
def local_server():
    # Start the local server on a free port
    port = get_free_port()
    server_process = subprocess.Popen(["python3", "-m", "http.server", str(port)])
    # Give it a moment to start
    time.sleep(1)
    yield f"http://localhost:{port}"
    # Teardown the server
    server_process.terminate()
    server_process.wait()

def test_contact_form_submission(local_server):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Navigate to the site
        page.goto(f"{local_server}/index.html")

        # Wait for the contact form to be visible
        page.wait_for_selector("#contactForm")

        # Setup mock for window.open
        # Memory tells us: "In Python Playwright page.evaluate calls, JavaScript code strings must not contain Python-style comments (#) to avoid syntax errors; use standard JavaScript comments (//)."
        page.evaluate("""
            window.openedUrls = [];
            window.originalOpen = window.open;
            window.open = function(url, target) {
                window.openedUrls.push(url);
                // Return a dummy window object with closed property
                return { closed: false };
            };
        """)

        # Fill out the form
        test_name = "Test User"
        test_email = "test@example.com"
        test_message = "This is a test message for the contact form."

        page.fill("#name", test_name)
        page.fill("#email", test_email)
        page.fill("#message", test_message)

        # Submit the form
        page.click("button#submitButton")

        # Verify UI state immediately after clicking
        assert page.text_content("#submitText") == "Sending..."
        assert not page.locator("#spinner").is_hidden()
        assert page.eval_on_selector("#submitButton", "el => el.disabled") is True

        # Verify that window.open was called with the correct mailto link
        opened_urls = page.evaluate("window.openedUrls")
        # Find the mailto url since there might be other window.open calls (like external scripts)
        mailto_url = next((url for url in opened_urls if url and url.startswith("mailto:")), None)
        assert mailto_url is not None, "No mailto URL was opened"

        assert mailto_url.startswith("mailto:Marvmuhd@gmail.com")

        # Check components of the URL
        parsed_url = urllib.parse.urlparse(mailto_url)
        query_params = urllib.parse.parse_qs(parsed_url.query)

        expected_subject = f"Message from {test_name}"
        expected_body = f"{test_message}\n\nFrom: {test_name}\nEmail: {test_email}"

        assert query_params['subject'][0] == expected_subject
        assert query_params['body'][0] == expected_body

        # Wait for the timeout to complete (2500ms total, let's wait 3000ms to be safe)
        page.wait_for_timeout(3000)

        # Verify UI state after timeout (reset)
        assert page.text_content("#submitText") == "Send Message"
        assert page.locator("#spinner").is_hidden()
        assert page.eval_on_selector("#submitButton", "el => el.disabled") is False

        # Close browser
        browser.close()

def test_contact_form_fallback_behavior(local_server):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Navigate to the site
        page.goto(f"{local_server}/index.html")

        # Wait for the contact form to be visible
        page.wait_for_selector("#contactForm")

        # Mock window.open to simulate popup blocker (returns null)
        page.evaluate("""
            window.open = function(url, target) {
                // Simulate blocked popup
                return null;
            };
        """)

        # Fill out the form
        page.fill("#name", "Test User 2")
        page.fill("#email", "test2@example.com")
        page.fill("#message", "Testing popup blocker fallback.")

        # Submit the form
        page.click("button#submitButton")

        # Wait for the first timeout (500ms) to trigger fallback logic
        page.wait_for_timeout(1000)

        # Verify the fallback option is visible
        assert not page.locator("#emailFallback").is_hidden()

        # Close browser
        browser.close()
