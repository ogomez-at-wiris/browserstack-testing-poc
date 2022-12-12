import Capabilities from './enums/capabilities.js'
import BrowserstackDriverService from './services/browserstack_driver_service.js'

const firefoxTestRunner = new BrowserstackDriverService(Capabilities.FIREFOX)

const chromeTestRunner = new BrowserstackDriverService(Capabilities.CHROME)

const safariTestRunner = new BrowserstackDriverService(Capabilities.SAFARI)
