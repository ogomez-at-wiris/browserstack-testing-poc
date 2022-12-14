const BrowserstackDriverService = require('../services/browserstack_driver_service.js')
const ChromeDriverService = require('../services/chrome_service.js')
const Capabilities = require('../enums/capabilities.js')

let driver
beforeEach(async () => {
  // driver = new BrowserstackDriverService(Capabilities.CHROME)
  driver = new ChromeDriverService()
})

it('performs an example test', async () => {
  await driver.visit('https://bstackdemo.com/')
})

afterEach(async () => {
  // await driver.quit()
})
