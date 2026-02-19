from playwright.sync_api import sync_playwright, expect
import os
import sys

def test_metadao_validation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Get absolute path to the HTML file
        file_path = "file://" + os.path.abspath("projects/Metadao.html")
        page = browser.new_page()

        # Abort requests to external resources to avoid timeouts
        page.route("**/*", lambda route: route.abort() if "http" in route.request.url else route.continue_())

        # Mock Chart.js to prevent script errors
        page.add_init_script("window.Chart = class { constructor() {} };")

        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))

        # We wait for 'domcontentloaded' which should trigger the scripts in the HTML.
        # If it doesn't trigger (e.g. if the event already fired), we can check or
        # just rely on the fact that we're using file:// and it should work.
        page.goto(file_path, wait_until="domcontentloaded")

        print("Testing Launchpad Recommender validation...")
        recommend_input = page.locator("#projectDescription")
        recommend_button = page.locator("#recommendButton")
        recommend_output = page.locator("#recommendationOutput")

        # Test empty input
        recommend_input.fill("")
        recommend_button.click()
        expect(recommend_output).to_be_visible()
        expect(recommend_output).to_have_text("Please enter a project description.")
        print("  - Empty input handled.")

        # Test whitespace input
        recommend_input.fill("   ")
        recommend_button.click()
        expect(recommend_output).to_be_visible()
        expect(recommend_output).to_have_text("Please enter a project description.")
        print("  - Whitespace input handled.")

        print("Testing Token Strategy Brainstormer validation...")
        strategy_input = page.locator("#projectIdea")
        strategy_button = page.locator("#strategyButton")
        strategy_output = page.locator("#strategyOutput")

        # Test empty input
        strategy_input.fill("")
        strategy_button.click()
        expect(strategy_output).to_be_visible()
        expect(strategy_output).to_have_text("Please enter a project idea.")
        print("  - Empty input handled.")

        # Test whitespace input
        strategy_input.fill("  \t\n ")
        strategy_button.click()
        expect(strategy_output).to_be_visible()
        expect(strategy_output).to_have_text("Please enter a project idea.")
        print("  - Whitespace input handled.")

        print("Testing Crypto Jargon Explainer validation...")
        jargon_input = page.locator("#jargonTerm")
        jargon_button = page.locator("#explainJargonButton")
        jargon_output = page.locator("#jargonOutput")

        # Test empty input
        jargon_input.fill("")
        jargon_button.click()
        expect(jargon_output).to_be_visible()
        expect(jargon_output).to_have_text("Please enter a crypto term.")
        print("  - Empty input handled.")

        # Test whitespace input
        jargon_input.fill("     ")
        jargon_button.click()
        expect(jargon_output).to_be_visible()
        expect(jargon_output).to_have_text("Please enter a crypto term.")
        print("  - Whitespace input handled.")

        browser.close()
        print("All validation tests passed!")

if __name__ == "__main__":
    try:
        test_metadao_validation()
    except Exception as e:
        print(f"Test failed: {e}")
        sys.exit(1)
