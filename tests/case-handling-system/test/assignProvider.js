(function() {
  "use strict";

  var utils = require("./helpers/_utils"),
    modelsRecipe = require("./helpers/_modelsRecipe"),
    CONSTANTS = require("../protractor.constants");

  var assignForm = element(by.name("assign_provider_form"));
  var assignBtn = element(by.name("assign-provider"));
  var selectedProvHeading = element(by.css(".ContactBlock-heading"));
  var caseRef, provider;

  describe("assignProvider", function() {
    beforeEach(utils.setUp);

    describe("An operator", function() {
      /**
       * Go to the assign page; if an option as_of parameter is given, it
       * will reload the page in 'mocked-time' mode.
       * If you are using this 'mocked-time' mode then make sure you
       * have set the matter types first.
       *
       * @param as_of datetime string in format (iso) yyyy-mm-ddThh:mm
       * @returns {!webdriver.promise.Promise.<void>}
       */

      it("should not be able to assign without diagnosis or eligibility", function() {
        modelsRecipe.Case.createEmpty().then(function(case_ref) {
          goto_assign(case_ref);

          expect(browser.getCurrentUrl()).not.toContain(case_ref + "/assign/");
        });
      });

      it("should not be able to assign a case without required fields", function() {
        modelsRecipe.Case.createEmptyWithInScopeAndEligible().then(function(
          case_ref
        ) {
          goto_assign(case_ref);

          var messages = element(
            by.css(".modal-content .Error[data-case-errors]")
          );
          expect(messages.isPresent()).toBe(true);
          expect(messages.getText()).toContain("Name");
          expect(messages.getText()).toContain("Case notes");
          expect(messages.getText()).toContain("A media code");
          expect(messages.getText()).toContain("Date of birth");
          expect(messages.getText()).toContain("A contact number");
        });
      });

      it("should be given a warning when assigning a case without address fields", function() {
        modelsRecipe.Case.createWithRequiredFields().then(function(case_ref) {
          goto_assign(case_ref);

          var messages = element(
            by.css(".modal-content .Notice[data-case-warnings]")
          );
          expect(messages.isPresent()).toBe(true);
          expect(messages.getText()).toContain("postcode");
          expect(messages.getText()).toContain("address");
          expect(messages.getText()).toContain("National Insurance number");
        });
      });

      xit("should assign a case to recommended provider (inside office hours)", function() {
        modelsRecipe.Case.createWithInScopeAndEligible().then(function(
          case_ref
        ) {
          goto_assign(case_ref, "2014-08-06T11:50");

          selectOption("matter_type1");
          selectOption("matter_type2");

          expect(assignBtn.isEnabled()).toBe(true);
          assignForm.submit();

          checkAssign(case_ref);
        });
      });

      xit("should assign case to rota provider (outside office hours)", function() {
        modelsRecipe.Case.createWithInScopeAndEligible().then(function(
          case_ref
        ) {
          goto_assign(case_ref, "2014-08-06T19:50");

          selectOption("matter_type1");
          selectOption("matter_type2");

          // assign first provider in list
          element
            .all(by.name("provider"))
            .get(0)
            .click();

          // store provider name
          selectedProvHeading.getText().then(function(text) {
            provider = text;
          });

          expect(assignBtn.isEnabled()).toBe(true);
          assignForm.submit();
          checkAssign(case_ref, provider);
        });
      });

      xit("should assign case outside office hours without rota set", function() {
        modelsRecipe.Case.createWithInScopeAndEligible().then(function(
          case_ref
        ) {
          caseRef = case_ref;

          goto_assign(case_ref, "2014-08-01T19:30");

          selectOption("matter_type1");
          selectOption("matter_type2");

          // assign first provider in list
          element
            .all(by.name("provider"))
            .get(0)
            .click();

          // store provider name
          selectedProvHeading.getText().then(function(text) {
            provider = text;
          });

          expect(assignBtn.isEnabled()).toBe(true);
          assignForm.submit();
          checkAssign(case_ref, provider);
        });
      });

      xit("should refer a case for a second opinion", function() {
        modelsRecipe.Case.createWithInScopeAndEligible().then(function(
          case_ref
        ) {
          caseRef = case_ref;

          goto_assign(case_ref, "2014-08-06T11:50");

          selectOption("matter_type1");
          selectOption("matter_type2");

          var sporFlag = element(by.name("is_spor"));
          utils.scrollTo(sporFlag);
          expect(sporFlag.isEnabled()).toBe(true);

          sporFlag.click();
          assignForm.submit();

          checkAssign(case_ref);
          utils.checkLastOutcome("SPOR");
        });
      });
    });
  });

  // helpers
  function goto_assign(case_ref, as_of) {
    var params = as_of ? "?as_of=" + encodeURIComponent(as_of) : "";
    return browser.get(
      CONSTANTS.callcentreBaseUrl + case_ref + "/assign/" + params
    );
  }

  function checkAssign(case_ref, provider) {
    // has been redirected
    expect(browser.getCurrentUrl()).not.toContain(case_ref);

    // cannot reassign
    browser.get(CONSTANTS.callcentreBaseUrl + case_ref + "/assign/");
    expect(assignBtn.isPresent()).toBe(false);

    // if provider specified, check correct one has been assigned
    if (provider) {
      expect(selectedProvHeading.getText()).toBe(provider);
    }
  }

  function selectOption(field) {
    element(by.css('[name="' + field + '"] option:last-child')).click();
  }
})();
