import os
from playwright.sync_api import sync_playwright

def test_contact_form():
    cwd = os.getcwd()
    file_path = f"file://{cwd}/index.html"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()
        page = context.new_page()

        # Block external resources to speed up test and avoid timeouts/errors
        page.route("**/*", lambda route: route.abort() if not route.request.url.startswith("file://") else route.continue_())

        # Catch console errors
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Page error: {exc}"))

        print(f"Navigating to {file_path}")
        page.goto(file_path, wait_until="domcontentloaded")

        # Mock window.open
        page.evaluate("""
            window.open = function(url, target) {
                window.openedUrl = url;
                return { closed: false };
            }
        """)

        # Fill form
        print("Filling form...")
        page.fill("#name", "Bolt Tester")
        page.fill("#email", "bolt@example.com")
        page.fill("#message", "This is a performance test.")

        # Click submit
        print("Clicking submit...")
        page.click("#submitButton")

        # Check if window.open was called with correct URL
        opened_url = page.evaluate("window.openedUrl")

        print(f"Opened URL: {opened_url}")

        if not opened_url:
            raise Exception("window.open was not called")

        if "mailto:Marvmuhd@gmail.com" not in opened_url:
            raise Exception(f"URL does not contain correct email: {opened_url}")

        if "Bolt%20Tester" not in opened_url and "Bolt Tester" not in opened_url:
             raise Exception(f"URL does not contain name: {opened_url}")

        print("Test Passed!")
        browser.close()

if __name__ == "__main__":
    test_contact_form()
