"use strict";

var constants = require("../modules/constants");
var nightwatch = require("../../nightwatch.conf")

module.exports = {
  "Start page": function(client) {
    client.startService();
  },
  "@disabled": false,
  "Scope diagnosis": function(client) {
    client.scopeDiagnosis(constants.SCOPE_PATHS.clinnegFaceToFace);
  },

  "Face-to-face page": function(client) {
    client
      .ensureCorrectPage(
        ".legal-adviser-search",
        "/scope/refer/legal-adviser",
        {
          "h1.page-title": "A legal adviser may be able to help you"
        }
      )
      .checkFlashMessage();
  },

  "Find legal adviser search": function(client) {
    client
      .setValue('input[name="postcode"]', "SW1A 1AA", function() {
        console.log("     • Enter postcode `SW1A 1AA`");
      })
      .conditionalFormSubmit(true)
      .assert.urlContains("/scope/refer/legal-adviser", "    - Page is ready")
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


     client.executeAsync(function(done) {
         ga(function(tracker) {
           done(tracker.get('location'))
         });
      }, function(result) {
        var url = nightwatch.test_settings.default.globals.baseUrl + "/scope/refer/legal-adviser?category=clinneg";
        client.assert.equal(result.value, url,"    - Google Analytics postcode has been redacted");
      });
    client.end();
  },

  end: function(client) {
    client.end();
  }
};
