Feature: Legal provider uploading monthly statements

  Scenario: Upload a new monthly statement
    Given I am a logged in provider
    When I upload the most recent month's statement
    Then I can see the new statement in the list
