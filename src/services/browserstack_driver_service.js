import Capabilities from '../enums/capabilities.js'
import BrowserstackContextManager from '../managers/browserstack_context.js'
import * as webdriver from 'selenium-webdriver'
import * as dotenv from 'dotenv';

export default class BrowserstackDriverService {
  constructor (capabilities) {
    dotenv.config();
    this.driver = new webdriver.Builder()
      .usingServer(`${process.env.BROWSERSTACK_SERVER_URL}`)
      .withCapabilities({
        ...capabilities.options,
        ...capabilities.options.browser && { browserName: capabilities.options.browser }
      })
      .build()

    this.browserstackContextManager = new BrowserstackContextManager(this.driver)
  }

  async runTest () {
    try {
      await this.driver.get('https://bstackdemo.com/')
      await this.driver.wait(webdriver.until.titleMatches(/StackDemo/i), 10000)
      // locating product on webpage and getting name of the product
      const productText = await this.driver
        .findElement(webdriver.By.xpath('//*[@id="1"]/p'))
        .getText()
      // clicking the 'Add to cart' button
      await this.driver.findElement(webdriver.By.xpath('//*[@id="1"]/div[4]')).click()
      // waiting until the Cart pane has been displayed on the webpage
      this.driver.findElement(webdriver.By.className('float-cart__content'))
      // locating product in cart and getting name of the product in cart
      const productCartText = await this.driver
        .findElement(
          webdriver.By.xpath(
            '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
          )
        )
        .getText()
      // checking whether product has been added to cart by comparing product name
      if (productCartText !== productText) { throw new Error('') }
      await this.browserstackContextManager.sendPassMessageWithText('Product successfully added to the cart and message sent')
    } catch (e) {
      await this.browserstackContextManager.sendFailMessageWithText('Unable to load elements')
    }

    await this.quit()
  }

  async quit () {
    await this.driver.quit()
  }
}
