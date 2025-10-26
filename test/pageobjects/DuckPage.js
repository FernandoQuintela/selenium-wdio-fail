class DuckPage {
  get searchInput() { return $('[name="q"]'); }

  async open() {
    await browser.url('/');
  }

  async search(term) {
    await this.searchInput.setValue(term);
    await browser.keys('Enter');
  }

  async waitForResults(term) {
    await browser.waitUntil(
      async () => (await browser.getTitle()).toLowerCase().includes(term.toLowerCase()),
      { timeout: 8000, timeoutMsg: `No apareció "${term}" en el título` }
    );
  }
}

export default new DuckPage();
