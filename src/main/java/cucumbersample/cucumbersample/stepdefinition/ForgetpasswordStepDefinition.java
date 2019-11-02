package cucumbersample.cucumbersample.stepdefinition;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumbersample.cucumbersample.helper.WaitHelper;
import cucumbersample.cucumbersample.pageobject.LoginPage;
import cucumbersample.cucumbersample.testbase.TestBase;

public class ForgetpasswordStepDefinition extends TestBase {
	
	WaitHelper waitHelper = new WaitHelper(driver);

	LoginPage loginPage=new LoginPage(driver);
	@Given("^I am on the Login page  \"([^\"]*)\"$")
	public void i_am_on_the_Login_page(String arg1) throws Throwable {
		driver.get(arg1);
		
	}

	@When("^he types correct username \"([^\"]*)\"$")
	public void he_types_correct_username(String arg1) throws Throwable {
		loginPage.enterUserName(arg1);
	}

	@When("^he types wrong password \"([^\"]*)\"$")
	public void he_types_wrong_password(String arg1) throws Throwable {
		loginPage.enterPassword(arg1);
		loginPage.clickLoginButton();
	}

	@Then("^He should be notified about wrong credentials$")
	public void he_should_be_notified_about_wrong_credentials() throws Throwable {
		Assert.assertEquals(loginPage.invalidLoginIsDispayed(),true);
	}

	@When("^he clicks forget password link$")
	public void he_clicks_forget_password_link() throws Throwable {
		loginPage.forgetYourPasswordLinkClick();
	}

	@Then("^He shouls see Forget Passsword Text$")
	public void he_shouls_see_Forget_Passsword_Text() throws Throwable {
		Assert.assertEquals(loginPage.fPPage(),true);
	}


}
