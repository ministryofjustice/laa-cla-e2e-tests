Feature: Cookie banner

  Scenario: No consent is given
    Given I am a user on the check legal aid start page
    Then I should see a cookie consent banner
    And I should have only essential cookies

  Scenario: All consent is granted
    Given I am a user on the check legal aid start page
    When I accept all cookies
    Then I should see the confirmation message
      """
      You’ve accepted all cookies. You can change your cookie settings at any time.
      """
    And I refresh the page
    Then both MOJ and GDS Google analytics tracking codes should be present
