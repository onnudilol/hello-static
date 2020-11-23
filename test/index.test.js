
describe('Click button', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should display "hello world"', async () => {
    await page.click('button');
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('hello world');  });
});