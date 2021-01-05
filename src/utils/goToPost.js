const { By } = require('selenium-webdriver');
const { postURL } = require('../config/config');

const goToPost = async (driver, timeawait = 2000) => {
    await driver.get(postURL);
    await driver.sleep(timeawait);
    const textarea = await driver.findElement(By.xpath("//textarea"));
    await textarea.click();
    await driver.sleep(timeawait);
};

module.exports = { goToPost };