/* eslint-disable @typescript-eslint/no-var-requires */
const chromedriver = require("chromedriver");

module.exports = {
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ["--port=4444"]
      },
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ["--port=4444"],
      },
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          w3c: false,
          args: ["--headless"],
        },
      },
    },
  },
};
