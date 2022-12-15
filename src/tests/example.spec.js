const BrowserstackDriverService = require('../services/browserstack_driver_service.js')
const ChromeDriverService = require('../services/chrome_service.js')
const Capabilities = require('../enums/capabilities.js')

let driver
beforeEach(async () => {
  const environment = process.env.SELENIUM_ENVIRONMENT
  switch (environment) {
    case 'local':
      driver = new ChromeDriverService()
      break
    case 'remote':
      driver = new BrowserstackDriverService(Capabilities.CHROME)
      break
    default:
      console.log(`Invalid environment: ${environment}`)
      process.exit(0)
      break
  }
})

it('performs an example test', async () => {
  await driver.visit('https://bstackdemo.com/')
})

afterEach(async () => {
  // await driver.quit()
})
