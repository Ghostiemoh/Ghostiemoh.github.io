from playwright.sync_api import sync_playwright
import os
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Start local server is handled by me manually in bash or I assume one is running?
        # Actually I need to start one. I can use python http.server

        # Open the file directly using file:// protocol since it's static HTML
        # But for correct behavior usually http is better.
        # Let's try file:// first as it is simpler.

        cwd = os.getcwd()
        file_path = f"file://{cwd}/index.html"
        print(f"Opening {file_path}")
        page.goto(file_path)

        # Verify button is initially hidden
        # The button has class opacity-0
        back_to_top = page.locator("#backToTop")

        if not back_to_top.is_visible():
             # It might be in DOM but hidden via opacity
             print("Button found in DOM")

        # Check initial state
        opacity = back_to_top.evaluate("el => window.getComputedStyle(el).opacity")
        print(f"Initial Opacity: {opacity}")
        if opacity != "0":
            print("Error: Button should be invisible initially")
            exit(1)

        # Scroll down
        print("Scrolling down...")
        page.evaluate("window.scrollTo(0, 1000)")
        time.sleep(1) # Wait for transition

        # Check visibility
        opacity = back_to_top.evaluate("el => window.getComputedStyle(el).opacity")
        print(f"Scrolled Opacity: {opacity}")
        if opacity != "1":
            print("Error: Button should be visible after scrolling")
            exit(1)

        # Click button
        print("Clicking Back to Top...")
        back_to_top.click()
        time.sleep(1) # Wait for scroll

        # Verify scroll position
        scroll_y = page.evaluate("window.scrollY")
        print(f"Scroll Y after click: {scroll_y}")
        if scroll_y > 10:
            print("Error: Should have scrolled to top")
            exit(1)

        print("Verification successful!")

        # Take screenshot
        os.makedirs("verification", exist_ok=True)
        screenshot_path = "verification/back_to_top.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run()
