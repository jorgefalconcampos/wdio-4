describe.skip("Login", () => {
  before(async () => {
    await browser.url("http://zero.webappsecurity.com/");
  });

  it("Should not login with invalid credentials", async () => {
    await browser.waitAndClick("#signin_button");
    await $("#login_form").waitForDisplayed();
    await browser.pause(1000);
    await (await $("#user_login")).setValue("test");
    await browser.pause(1000);
    await (await $("#user_password")).setValue("test");
    await browser.pause(1000);
    await (await $("input[type='submit']")).click();
    await browser.pause(1000);
    const errMessage = await $(".alert-error");
    await expect(errMessage).toHaveTextContaining(
      "Login and/or password are wrong."
    );
    await browser.pause(1000);
  });

  it("Resetpassword", async () => {
    const email = "test@test.com";
    await browser.waitAndClick("*=Forgot");
    await browser.pause(1000);
    await $("#user_email").waitForDisplayed();
    await browser.pause(1000);
    await (await $("#user_email")).setValue(email);
    await (await $("input[type='submit']")).click();
    await browser.pause(1000);
    const msg = await $(".span6");
    await browser.pause(1000);
    await expect(msg).toHaveTextContaining(
      "Your password will be sent to the following email:"
    );
  });


});
