@Password
Feature: Forget Password
  As a customer he can reset his password

  
  @sanity @regression
  Scenario: Wrong Credentials message
    Given I am on the Login page  "https://ui.cogmento.com"
    When he types correct username "nibeditadan@gmail.com"
    And he types wrong password "Test@1234"
    Then He should be notified about wrong credentials
    
  @sanity @regression
  Scenario: ForgetPassword Link
   Given I am on the Login page URL "https://ui.cogmento.com"
    When he clicks forget password link
    Then He shouls see Forget Passsword Text

   