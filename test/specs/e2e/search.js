describe.skip("Search Feature", () => {
  it("Should search for valus using keyboard press", async () => {
    await await browser.url("http://zero.webappsecurity.com/index.html");
    await (await $("#searchTerm")).waitForDisplayed();
    await browser.pause(750);
    await (await $("#searchTerm")).setValue("bank");
    await browser.pause(750);

    await await browser.keys("Enter");
    const r = await $("h2");
    await browser.pause(750);
    await expect(r).toBeExisting();
    await expect(r).toHaveTextContaining("Search Results");
  });
});
