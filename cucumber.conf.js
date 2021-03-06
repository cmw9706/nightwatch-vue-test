/* eslint-disable @typescript-eslint/no-var-requires */
const { setDefaultTimeout, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const { createSession, closeSession, startWebDriver, stopWebDriver } = require("nightwatch-api");
const Service = require("@vue/cli-service/lib/Service.js");
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd());

let runningProcess;
let urlOfRunningApp;
setDefaultTimeout(60000);

BeforeAll(async () => {
  runningProcess = await service.run("serve");
  const { url } = runningProcess;
  urlOfRunningApp = url;
  await startWebDriver({ env: "chromeHeadless" });
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  const { server } = runningProcess;
  server.close();
});

module.exports = function () {
  return urlOfRunningApp;
};
