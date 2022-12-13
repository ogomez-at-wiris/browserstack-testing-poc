class BasePage {
  constructor (driver) {
    this.driver = driver
  }

  async waitForTitle (title) {
    this.driver.wait(this.driver.until.titleMatches(), 10000)
  }

  async findElementByXpath (element) {
    return await this.driver
      .findElement(this.driver.By.xpath('//*[@id="1"]/p'))
  }
}

module.exports = BasePage
