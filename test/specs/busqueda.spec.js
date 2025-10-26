describe('DuckDuckGo', () => {
  it('busca "selenium webdriver" y valida título', async () => {
    await browser.url('https://duckduckgo.com');   // URL completa
    const search = await $('[name="q"]');
    await search.setValue('selenium webdriver');
    await browser.keys('Enter');

    await browser.waitUntil(
      async () => (await browser.getTitle()).toLowerCase().includes('selenium'),
      { timeout: 8000, timeoutMsg: 'Nunca apareció un título con "selenium"' }
    );

    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('selenium');
  });
});
