"use strict";

var constants = require("../modules/constants");
var log = require("../modules/log");

this.perform(function() {
log.command('HELLO FROM THE FACE TO FACE PAGE...');

module.exports = {
  before : function(browser) {
    console.log('About to click on START')
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  "Start page": function(client) {
    client.startService();
  },

//  "@disabled": false,
//  "Scope diagnosis": function(client) {
//    client.scopeDiagnosis(constants.SCOPE_PATHS.clinnegFaceToFace);
//  },

  "Face-to-face page": function(client) {
    client
      .ensureCorrectPage(
        ".legal-adviser-search",
        "/scope/refer/legal-adviser",
        {
          h1: "A legal adviser may be able to help you"
        }
      )
      .checkFlashMessage();
  },

  "Find legal adviser search": function(client) {
    log.command("HELLO");
    client
      .setValue('input[name="postcode"]', "w22dd", function() {
        console.log("     • Enter postcode `w22dd`");
      })
      .conditionalFormSubmit(true)
      .assert.urlContains("/scope/refer/legal-adviser", "    - Page is NOT ready")
      .waitForElementVisible(
        ".search-results-container",
        5000,
        "    - Search results are shown"
      )
      .assert.containsText(
        ".results-summary",
        "results around",
        "    - Results summary has location"
      )
      .assert.containsText(
        ".results-filter",
        constants.SCOPE_PATHS.clinnegFaceToFace.title.toUpperCase(),
        "    - Filter contains category name"
      );

    client.end();
  },

  end: function(client) {
    client.end();
  }
};
