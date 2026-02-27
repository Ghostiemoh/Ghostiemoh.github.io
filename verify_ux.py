import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Load the page from file using absolute path
        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")

        # Initial check - button should be hidden
        # Wait for potential animations/load
        await page.wait_for_timeout(1000)

        is_hidden = await page.evaluate("""() => {
            const btn = document.getElementById('backToTop');
            return btn.classList.contains('opacity-0') && btn.classList.contains('invisible');
        }""")
        print(f"Initial state hidden: {is_hidden}")

        # Scroll down to trigger visibility
        await page.evaluate("window.scrollTo(0, 500)")
        await page.wait_for_timeout(500) # Wait for transition

        is_visible = await page.evaluate("""() => {
            const btn = document.getElementById('backToTop');
            return btn.classList.contains('opacity-100') && btn.classList.contains('visible');
        }""")
        print(f"Scrolled state visible: {is_visible}")

        if is_visible:
            # Click button
            await page.click("#backToTop")
            await page.wait_for_timeout(1000) # Wait for smooth scroll

            scroll_y = await page.evaluate("window.scrollY")
            print(f"Scroll position after click: {scroll_y}")

            # Take screenshot
            os.makedirs("/home/jules/verification", exist_ok=True)
            screenshot_path = "/home/jules/verification/back_to_top.png"
            await page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")
        else:
            print("Button not visible, cannot click")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
