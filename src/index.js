const { Builder } = require('selenium-webdriver');
const { credentials } = require('./config/config');
const { login, goToPost } = require('./utils/index');

(main = async () => {
    try {
        const driver = await new Builder().forBrowser('firefox').build();
        login(driver, credentials.username, credentials.password, goToPost);
    } catch (e) {
        console.error(e);
        await driver.quit();
    }
})();