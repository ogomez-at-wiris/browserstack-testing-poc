const BrowserstackContextManager = require('../managers/browserstack_context.js')
const webdriver = require('selenium-webdriver')
const dotenv = require('dotenv')

class BrowserstackDriverService {
  constructor (capabilities) {
    dotenv.config()
    this.driver = new webdriver.Builder()
      .usingServer(`${process.env.BROWSERSTACK_SERVER_URL}`)
      .withCapabilities({
        ...capabilities.options,
        ...capabilities.options.browser && { browserName: capabilities.options.browser }
      })
      .build()

    this.browserstackContextManager = new BrowserstackContextManager(this.driver)
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

module.exports = BrowserstackDriverService
