/* eslint-disable @typescript-eslint/no-var-requires */
const { client } = require("nightwatch-api");
const { Given, Then } = require("@cucumber/cucumber");
const getAppUrl = require("../cucumber.conf.js");

Given(/^I open the home screen$/, async () => {
  await client.url(getAppUrl()).waitForElementVisible("body");
});

Then(/^I can see the elements$/, async () => {
  await client.assert.elementPresent(".label");
});
