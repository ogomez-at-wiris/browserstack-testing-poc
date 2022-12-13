class browserstackContextManager {
  constructor (driver) {
    this.driver = driver
  }

  async sendPassMessageWithText (message) {
    await this.driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "' + message + '"}}'
    )
  }

  async sendFailMessageWithText (message) {
    await this.driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "' + message + '"}}'
    )
  }
}

module.exports = browserstackContextManager
