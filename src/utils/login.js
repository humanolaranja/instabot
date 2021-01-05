const { By, Key } = require('selenium-webdriver');

const login = async (driver, username, password, timeawait = 3000) => {
    await driver.get("https://www.instagram.com/accounts/login");
    await driver.sleep(timeawait);

    let usernameField = await driver.findElement(By.xpath("//input[@name='username']"));
    let passwordField = await driver.findElement(By.xpath("//input[@name='password']"));

    await usernameField.click();
    await usernameField.clear();
    await usernameField.sendKeys(username);

    await passwordField.click();
    await passwordField.clear();
    await passwordField.sendKeys(password);
    
    await driver.sleep(timeawait / 4);
    await passwordField.sendKeys(Key.RETURN)
    await driver.sleep(timeawait);

    console.log('redirect');
};

module.exports = { login };