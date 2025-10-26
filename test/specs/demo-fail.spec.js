import { expect } from 'expect';

describe('Demo de fallo con screenshot', () => {
  it('falla a propósito para generar evidencia', async () => {
    await browser.url('https://duckduckgo.com');   // página real
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('cucumber'); // fuerza el fail
  });
});
