#Author: nibeditadan@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
@Login
Feature: Sign In
  As an customer of the company
  I want to login to application with my credentails
  In order to use the application features.

  Background: User navigates to Application URL
    Given I am on the Login page URL "https://ui.cogmento.com"
    Then I should see Log In Page

  @sanity
  Scenario: Sign In with valid credential
    When I enter username as "nibeditadan@gmail.com"
    And I enter password as "Password#123"
    And click on login button
    Then I sould see application homepage
    And I sould see my username on Home Page

  @sanity
  Scenario Outline: Sign In with valid credentials
    When I enter username as "<userName>"
    And I enter password as "<password>"
    And click on login button
    Then I sould see application "<homepage>"
     And I sould see my "<userName>" on Home Page
  

    Examples: 
      | nibeditadan@gmail.com | Password#123 | https://ui.cogmento.com |
