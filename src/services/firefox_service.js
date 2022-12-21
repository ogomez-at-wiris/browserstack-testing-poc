const webdriver = require('selenium-webdriver')
const dotenv = require('dotenv')
const firefox = require('selenium-webdriver/firefox')
// firefox driver
const firefoxDriver = require('geckodriver')

class FirefoxService {
  constructor () {
    console.log('fire! fire')
    dotenv.config()

    this.driver = new webdriver.Builder()
      .forBrowser('firefox')
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

module.exports = FirefoxService
