describe("Successfully request for a product", () => {
  before(async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.sauceLogin();
  });

  after(async () => {
    await browser.sauceLogout();
  });

  it.describe("Should complete product order", async () => {
    await browser.pause(3000);
  });
});
