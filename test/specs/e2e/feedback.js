describe.skip("Feedback form", () => {
  it("Should submit feedback form", async () => {
    const name = "Bruce";
    const email = "bwayne@test.com";
    const subj = "Subject";
    const msg = "Prueba desde wd.io";
    await browser.url("http://zero.webappsecurity.com/index.html");
    await browser.waitAndClick("#feedback");
    await (await $("#name")).setValue(name);
    await browser.pause(500);
    await (await $("#email")).setValue(email);
    await browser.pause(500);
    await (await $("#subject")).setValue(subj);
    await browser.pause(500);
    await (await $("#comment")).setValue(msg);
    await browser.pause(500);
    await (await $("input[type='submit']")).click()
    await expect(browser).toHaveUrlContaining("sendFeedback.html")
  });
});
