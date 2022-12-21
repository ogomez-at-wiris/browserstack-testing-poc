const commonCapabilities = {
  'browserstack.networkLogs': 'true',
  'browserstack.networkLogsOptions': {
    captureContent: 'true'
  }
}

class Capabilities {
  static CHROME = new Capabilities({
    ...commonCapabilities,
    'bstack:options': {
      os: 'Windows',
      osVersion: '11',
      buildName: 'browserstack-build-1',
      sessionName: 'Parallel test 1'
    },
    browserName: 'Chrome',
    browserVersion: '103.0'
  })

  static FIREFOX = new Capabilities({
    'bstack:options': {
      os: 'Windows',
      osVersion: '10',
      buildName: 'browserstack-build-1',
      sessionName: 'Parallel test 2'
    },
    browserName: 'Firefox',
    browserVersion: '102.0'
  })

  static SAFARI = new Capabilities({
    'bstack:options': {
      os: 'OS X',
      osVersion: 'Big Sur',
      buildName: 'browserstack-build-1',
      sessionName: 'Parallel test 3'
    },
    browserName: 'Safari',
    browserVersion: '14.1'
  })

  static 'MOBILE' = new Capabilities({
    'bstack:options': {
      osVersion: '14',
      deviceName: 'iPhone 12',
      realMobile: 'true'
    },
    browserName: 'Safari',
    browserVersion: '14.1'
  })

  constructor (capabilityOptions) {
    this.options = capabilityOptions
  }
}

module.exports = Capabilities
