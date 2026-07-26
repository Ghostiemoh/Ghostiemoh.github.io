from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:4173")

    # Scroll down to trigger the progress HUD
    page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")

    page.screenshot(path="screenshot.png", full_page=True)

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
