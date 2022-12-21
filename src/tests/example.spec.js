const BrowserstackDriverService = require('../services/browserstack_driver_service.js')
const ChromeDriverService = require('../services/chrome_service.js')
const FirefoxDriverService = require('../services/firefox_service.js')
const Capabilities = require('../enums/capabilities.js')

let driver
beforeEach(async () => {
  const environment = process.env.SELENIUM_ENVIRONMENT
  switch (environment) {
    case 'chrome':
      driver = new ChromeDriverService()
      break
    case 'firefox':
      driver = new FirefoxDriverService()
      break

    case 'bs':
      driver = new BrowserstackDriverService(Capabilities.CHROME)
      break
    default:
      console.log(`Invalid environment: ${environment}`)
      process.exit(0)
      break
  }
})

it('performs an example test', async () => {
  await driver.visit('http://localhost:9000')
})

afterEach(async () => {
  await driver.quit()
})
