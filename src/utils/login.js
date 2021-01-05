const { By, Key } = require('selenium-webdriver');

const login = async (driver, username, password, redirect, timeawait = 2000) => {
    await driver.get("https://www.instagram.com/accounts/login");
    await driver.sleep(timeawait);

    const usernameField = await driver.findElement(By.xpath("//input[@name='username']"));
    const passwordField = await driver.findElement(By.xpath("//input[@name='password']"));

    await usernameField.click();
    await usernameField.clear();
    await usernameField.sendKeys(username);

    await passwordField.click();
    await passwordField.clear();
    await passwordField.sendKeys(password);
    
    await driver.sleep(timeawait / 4);
    await passwordField.sendKeys(Key.RETURN)
    await driver.sleep(timeawait * 2);

    await redirect(driver);
};

module.exports = { login };