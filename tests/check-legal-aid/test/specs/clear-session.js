"use strict";

var common = require("../modules/common-functions");
var constants = require("../modules/constants");

module.exports = {
  "Start page": function(client) {
    client.startService();
  },

  "@disabled": true,
  "Scope diagnosis": function(client) {
    client.scopeDiagnosis(constants.SCOPE_PATHS.debtInScope);
  },

  "Interstitial page": function(client) {
    client.interstitialPage();
  },

  "About you": function(client) {
    client.aboutSetAllToNo(true);
  },

  "Start page again": function(client) {
    // not using common.startPage because that clears cookies which would negate this test
    client.init().maximizeWindow();
  },

  "Scope diagnosis again": function(client) {
    client.scopeDiagnosis(constants.SCOPE_PATHS.debtInScope);
  },

  "Interstitial page again": function(client) {
    client.interstitialPage();
  },

  "Check option is not selected": function(client) {
    client.debug();
    common.checkAttributeIsNotPresent(
      client,
      'input[name="have_partner"]',
      "checked"
    );

    client.end();
  }
};
