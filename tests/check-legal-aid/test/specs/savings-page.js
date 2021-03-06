"use strict";

var util = require("util");
var common = require("../modules/common-functions");
var constants = require("../modules/constants");

var VALUABLES_MINIMUM = constants.VALUABLES_MINIMUM;
var SAVINGS_THRESHOLD = constants.SAVINGS_THRESHOLD;
var SAVINGS_QUESTIONS = constants.SAVINGS_QUESTIONS;
SAVINGS_QUESTIONS.ALL = SAVINGS_QUESTIONS.MONEY.concat(
  SAVINGS_QUESTIONS.VALUABLES
);

module.exports = {
  "Start page": function(client) {
    client.startService();
  },

  "@disabled": false,
  "Scope diagnosis": function(client) {
    client.scopeDiagnosis(constants.SCOPE_PATHS.debtInScope);
  },

  "Interstitial page": function(client) {
    client.interstitialPage();
  },

  "About you": function(client) {
    client.aboutSetAllToNo(true, {
      have_savings: 1
    });
  },

  "Savings page": function(client) {
    client.ensureCorrectPage('input[name="savings"]', "/savings", {
      "h1.page-title": "Your savings"
    });
  },

  "Context-dependent text for partner": function(client) {
    client
      .ensureCorrectPage("body.js-enabled", "/savings", {
        ".main-content":
          "We need to know about any money you have saved or invested"
      })
      .back()
      .ensureCorrectPage("#have_partner-0", "/about")
      .setYesNoFields("have_partner", 1)
      .pause(100)
      .setYesNoFields(
        ["in_dispute", "partner_is_employed", "partner_is_self_employed"],
        0
      )
      .conditionalFormSubmit(true)
      .ensureCorrectPage("body.js-enabled", "/savings", {
        "h1.page-title": "You and your partner’s savings",
        body:
          "Any cash, savings or investments held in your name, your partner’s name or both your names"
      });
  },

  "Test validation": function(client) {
    client.ensureFormValidation();

    var questions = [];
    SAVINGS_QUESTIONS.MONEY.forEach(function(item) {
      questions.push({
        name: item.name,
        errorText: item.errorText
      });
    });
    common.submitAndCheckForFieldError(client, questions);
    SAVINGS_QUESTIONS.VALUABLES.forEach(function(item) {
      client.assert.elementNotPresent(
        util.format('input[name="%s"]', item.name),
        util.format("    - `%s` is not present", item.name)
      );
    });
    client.end();
  },

  "More validation": !function(client) {
    client
      .startService()
      .scopeDiagnosis(constants.SCOPE_PATHS.debtInScope)
      .interstitialPage()
      .aboutSetAllToNo(true, {
        have_valuables: 1
      });
    var questions = [];
    SAVINGS_QUESTIONS.VALUABLES.forEach(function(item) {
      questions.push({
        name: item.name,
        errorText: item.errorText
      });
    });
    common.submitAndCheckForFieldError(client, questions);
    SAVINGS_QUESTIONS.MONEY.forEach(function(item) {
      client.assert.elementNotPresent(
        util.format('input[name="%s"]', item.name),
        util.format("    - `%s` is not present", item.name)
      );
    });
    client.end();
  },

  "Test outcomes": !function(client) {
    client
      .startService()
      .scopeDiagnosis(constants.SCOPE_PATHS.debtInScope)
      .interstitialPage()
      .aboutSetAllToNo(true, {
        have_valuables: 1,
        have_savings: 1
      })
      .ensureCorrectPage('input[name="savings"]', "/savings");
    common.setAllSavingsFieldsToValue(client, 501);
    client
      .conditionalFormSubmit(true)
      .assert.urlContains(
        "/income",
        "  - Should arrive at income page when all savings/money fields set to £501"
      )
      .back()
      .ensureCorrectPage('input[name="savings"]', "/savings");

    SAVINGS_QUESTIONS.ALL.forEach(function(item) {
      // set all to 0
      common.setAllSavingsFieldsToValue(client, 0);
      // set this item to SAVINGS_THRESHOLD
      if (item.name === "valuables") {
        client
          .clearValue(util.format('input[name="%s"]', item.name))
          .setValue(
            util.format('input[name="%s"]', item.name),
            SAVINGS_THRESHOLD
          );
      } else {
        client
          .clearValue('input[name="valuables"]')
          .clearValue(util.format('input[name="%s"]', item.name))
          .setValue('input[name="valuables"]', VALUABLES_MINIMUM)
          .setValue(
            util.format('input[name="%s"]', item.name),
            SAVINGS_THRESHOLD - VALUABLES_MINIMUM
          );
      }
      client
        .conditionalFormSubmit(true)
        .assert.urlContains(
          "/income",
          util.format(
            "  - Should arrive at income page when %s field set to %s and others to £0",
            item.name,
            SAVINGS_THRESHOLD
          )
        )
        .back()
        .ensureCorrectPage('input[name="savings"]', "/savings");
    });

    SAVINGS_QUESTIONS.ALL.forEach(function(item) {
      client
        .startService()
        .scopeDiagnosis(constants.SCOPE_PATHS.debtInScope)
        .interstitialPage()
        .aboutSetAllToNo(true, {
          have_valuables: 1,
          have_savings: 1
        });
      // set all to 0
      common.setAllSavingsFieldsToValue(client, 0);
      // set this item to SAVINGS_THRESHOLD+1
      if (item.name === "valuables") {
        client
          .clearValue(util.format('input[name="%s"]', item.name))
          .setValue(
            util.format('input[name="%s"]', item.name),
            SAVINGS_THRESHOLD + 1
          );
      } else {
        client
          .clearValue('input[name="valuables"]')
          .clearValue(util.format('input[name="%s"]', item.name))
          .setValue('input[name="valuables"]', VALUABLES_MINIMUM)
          .setValue(
            util.format('input[name="%s"]', item.name),
            SAVINGS_THRESHOLD - VALUABLES_MINIMUM + 1
          );
      }
      client
        .conditionalFormSubmit(true) // review
        .conditionalFormSubmit(true)
        .assert.urlContains(
          "/result/refer/",
          util.format(
            "  - Result ineligible when %s field set to £%s",
            item.name,
            SAVINGS_THRESHOLD + 1
          )
        );
    });

    client.end();
  }
};
