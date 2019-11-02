package cucumbersample.cucumbersample.pageobject;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumbersample.cucumbersample.helper.WaitHelper;

public class LoginPage {
private WebDriver driver;
	
	@FindBy(xpath="//input[@placeholder='E-mail address']")
	public WebElement userName;
	
	@FindBy(xpath="//input[@placeholder='Password']")
	WebElement password;
	
	@FindBy(xpath="//div[@class='ui fluid large blue submit button']")
	WebElement loginButton;
	
	@FindBy(xpath="//span[@class='user-display'] ")
	WebElement userNameInHomePage;
	
	@FindBy(xpath="//a[contains(text(),'Forgot your password?')]")
	WebElement forgotyourpassswordlink;
	
	@FindBy(xpath="//p[contains(text(),'Invalid login')]")
	WebElement invalidLogin;
	
	@FindBy(xpath="//h2[@class='ui blue header']")
	WebElement headerInFPPage;
	
	WaitHelper waitHelper;
	
	public LoginPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		//waitHelper.WaitForElement(userName, 60);
	}
	
	public void enterUserName(String username){
		waitHelper.WaitForElement(userName, 60);

		this.userName.sendKeys(username);
	}
	
	public void enterPassword(String pwd){
		waitHelper.WaitForElement(password, 60);

		this.password.sendKeys(pwd);
	}
	
	public void clickLoginButton() throws InterruptedException{
		loginButton.click();
		Thread.sleep(5000);
	}
	
	public String getUsernameInHomePage() {
		return userNameInHomePage.getText();
	}
	
	public boolean forgotYourPwdLink() {
		return forgotyourpassswordlink.isDisplayed();
	}
	public boolean invalidLoginIsDispayed() {
		return invalidLogin.isDisplayed();
	}

	public void forgetYourPasswordLinkClick() {
		forgotyourpassswordlink.click();
	}
	public boolean fPPage() {
		return headerInFPPage.isDisplayed();
	}
}