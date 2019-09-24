Feature: Cookie consent settings

  Scenario: All consent is off by default
    Given I am on the check legal aid cookie settings page
    Then all cookie settings should be off

  Scenario: Consent is granted only for Ministry of Justice cookies
    Given I am on the check legal aid cookie settings page
    When I approve Ministry of Justice cookies
    And I submit the cookie settings form
    And I navigate to the check legal aid start page
		Then MOJ Google analytics tracking should only be the tracking code present

  Scenario: Consent is granted only for GDS cookies
    Given I am on the check legal aid cookie settings page
    When I approve Government Digital Service cookies
    And I submit the cookie settings form
    And I navigate to the check legal aid start page
    Then GDS Google analytics tracking should only be the tracking code present

  Scenario: Consent is granted for both MOJ and GDS cookies
    Given I am on the check legal aid cookie settings page
    When I approve both the MOJ and GDS  cookies
    And I submit the cookie settings form
    And I navigate to the check legal aid start page
    Then both MOJ and GDS Google analytics tracking codes should be present