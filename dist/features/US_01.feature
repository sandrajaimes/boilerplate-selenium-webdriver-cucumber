Feature: US_01 - As a user I want to be able to view a list of products

  Scenario: As a user I want to be able to view a list of products
    Given If I open the page in the product list - US_01
    When I can see a list of products
    Then I can get: Title, price and description