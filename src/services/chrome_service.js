const webdriver = require('selenium-webdriver')
const dotenv = require('dotenv')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

class ChromeService {
  constructor () {
    dotenv.config()
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
    // Get a chrome driver

    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build()
  }

  async visit (url) {
    const cdpConnection = await this.driver.createCDPConnection('page')
    await this.driver.onLogEvent(cdpConnection, function (event) {
      console.log(`log captured! ${event.args[0].value}`)
    })

    await this.driver.get(url)
  }

  async getSeleniumDriver () {
    return this.driver
  }

  async quit () {
    await this.driver.quit()
  }
}

module.exports = ChromeService
