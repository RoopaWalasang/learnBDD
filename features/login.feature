Feature: Borrowing calculator ANZ

  Scenario Outline: As a user, I can calculate the borrowing homeloan

    Given I am on the homeloan borrowing calculator page
    When I Enter application type 
    When I Enter number of dependents
    When I enter propertyyou would like to buy
    When Enter your annual income
    When Enter your annual other income 
    When Enter monthly expenses
    When Enter current home loan monthly repayments 
    When Enter other loan monthly repayments
    When Enter monthly commitments
    When Enter Total credit card limits
    When click on Work out how much I could borrow
    Then I should get borrowing estimate 
    When Click on Start over button
    Then I should see all fields should be cleared

    
