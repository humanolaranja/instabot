const { Builder } = require('selenium-webdriver');
const { credentials } = require('./config/config');
const { login } = require('./utils/index');

(async function main() {
    try {
        const driver = await new Builder().forBrowser('firefox').build();
        login(driver, credentials.username, credentials.password);
    } catch (e) {
        console.error(e);
        await driver.quit();
    }
})();