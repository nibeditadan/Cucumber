package cucumbersample.cucumbersample.stepdefinition;

import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumbersample.cucumbersample.helper.WaitHelper;
import cucumbersample.cucumbersample.pageobject.LoginPage;
import cucumbersample.cucumbersample.testbase.TestBase;

public class loginPageStepDefinitions extends TestBase {
	
	LoginPage loginPage = new LoginPage(driver);
	WaitHelper waitHelper;
	
	
	@Given("^I am on the Login page URL \"([^\"]*)\"$")
	public void i_am_on_the_Login_page_URL(String arg1) throws Throwable {
		
		driver.get(arg1);
		waitHelper = new WaitHelper(driver);
		waitHelper.WaitForElement(loginPage.userName, 60);
	  //  throw new PendingException();
	}

	@Then("^I should see Log In Page$")
	public void i_should_see_Log_In_Page() throws Throwable {
		//loginPage = new LoginPage(driver);
		loginPage.userName.isDisplayed();
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String arg1) throws Throwable {
		loginPage.enterUserName(arg1);
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String arg1) throws Throwable {
		loginPage.enterPassword(arg1);
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		loginPage.clickLoginButton();
	}
	
	@Then("^I sould see application homepage$")
	public void i_sould_see_application_homepage() throws Throwable {
		
		Assert.assertEquals(driver.getTitle(),"Cogmento CRM");
	    
	}

	@Then("^I sould see my username on Home Page$")
	public void i_sould_see_my_username_on_Home_Page() throws Throwable {
		Assert.assertEquals(loginPage.getUsernameInHomePage(),"Nibedita Dan");
		//throw new PendingException();
	}

	public void clickForgetPasswordBtn() {
		
	}

}