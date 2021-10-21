/* eslint-disable @typescript-eslint/no-var-requires */
const { client } = require("nightwatch-api");
const { Given, Then } = require("@cucumber/cucumber");

Given(/^I open the home screen$/, async () => {
  await client.url("http://localhost:8080/").waitForElementVisible("body");
});

Then(/^I can see the elements$/, async () => {
  await client.assert.elementPresent(".label");
});
