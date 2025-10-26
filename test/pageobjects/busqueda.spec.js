import DuckPage from '../pageobjects/DuckPage.js';
import { expect } from 'expect';

describe('DuckDuckGo', () => {
  it('busca "selenium webdriver" y valida título', async () => {
    await DuckPage.open();
    await DuckPage.search('selenium webdriver');
    await DuckPage.waitForResults('selenium');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('selenium');
  });
});
