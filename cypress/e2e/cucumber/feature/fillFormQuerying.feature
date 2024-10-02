Feature: Fill the form in querying page with email and password

  Scenario: Enter the email and password in the form exist on querying page
    Given User is on the example.cypress.io Home page
    When User click on commands dropdown and select the querying option
    When User fill the form details 
    Then User should be able to see the entered details on form
