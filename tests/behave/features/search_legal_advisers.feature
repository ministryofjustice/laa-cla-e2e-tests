Feature: Search for legal advisers

  Scenario Outline: Finding legal advisers for specific categories of law
    Given I am a user searching for legal advisers
    When I search for a legal adviser with postcode "<postcode>" and category "<category>"
    Then I should see a list of legal advisers
    Examples: Search
        | postcode         | category |
        | W1A              | disc     |
        | W1A              | edu      |
