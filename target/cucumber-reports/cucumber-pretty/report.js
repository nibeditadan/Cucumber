$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("forgetpassword.feature");
formatter.feature({
  "line": 2,
  "name": "Forget Password",
  "description": "As a customer he can reset his password",
  "id": "forget-password",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Password"
    }
  ]
});
formatter.before({
  "duration": 22872018100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Wrong Credentials message",
  "description": "",
  "id": "forget-password;wrong-credentials-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page  \"https://ui.cogmento.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "he types correct username \"nibeditadan@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "he types wrong password \"Test@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "He should be notified about wrong credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.cogmento.com",
      "offset": 25
    }
  ],
  "location": "ForgetpasswordStepDefinition.i_am_on_the_Login_page(String)"
});
formatter.result({
  "duration": 112403036800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nibeditadan@gmail.com",
      "offset": 27
    }
  ],
  "location": "ForgetpasswordStepDefinition.he_types_correct_username(String)"
});
formatter.result({
  "duration": 1445501200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@1234",
      "offset": 25
    }
  ],
  "location": "ForgetpasswordStepDefinition.he_types_wrong_password(String)"
});
formatter.result({
  "duration": 6185499800,
  "status": "passed"
});
formatter.match({
  "location": "ForgetpasswordStepDefinition.he_should_be_notified_about_wrong_credentials()"
});
formatter.result({
  "duration": 481939600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1785661100,
  "status": "passed"
});
formatter.before({
  "duration": 11628975400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "ForgetPassword Link",
  "description": "",
  "id": "forget-password;forgetpassword-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on the Login page URL \"https://ui.cogmento.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "he clicks forget password link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "He shouls see Forget Passsword Text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.cogmento.com",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 49182055200,
  "status": "passed"
});
formatter.match({
  "location": "ForgetpasswordStepDefinition.he_clicks_forget_password_link()"
});
formatter.result({
  "duration": 7192787400,
  "status": "passed"
});
formatter.match({
  "location": "ForgetpasswordStepDefinition.he_shouls_see_Forget_Passsword_Text()"
});
formatter.result({
  "duration": 60466600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1580298700,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: nibeditadan@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    }
  ],
  "line": 14,
  "name": "Sign In",
  "description": "As an customer of the company\nI want to login to application with my credentails\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 13,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 11927828600,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "I am on the Login page URL \"https://ui.cogmento.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.cogmento.com",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 39099307800,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 82510700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I enter username as \"nibeditadan@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter password as \"Password#123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I sould see my username on Home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "nibeditadan@gmail.com",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 297417800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password#123",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 219420200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5143595900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 28809700,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_sould_see_my_username_on_Home_Page()"
});
formatter.result({
  "duration": 485018100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027user-display\u0027] \"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-5CHV4394\u0027, ip: \u0027192.168.43.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\NIBEDI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55920}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5a0553780d763ee737eef3e54a22b101\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027user-display\u0027] }\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat cucumbersample.cucumbersample.pageobject.LoginPage.getUsernameInHomePage(LoginPage.java:62)\r\n\tat cucumbersample.cucumbersample.stepdefinition.loginPageStepDefinitions.i_sould_see_my_username_on_Home_Page(loginPageStepDefinitions.java:58)\r\n\tat ✽.And I sould see my username on Home Page(login.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1435223400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I sould see application \"\u003chomepage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I sould see my \"\u003cuserName\u003e\" on Home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "nibeditadan@gmail.com",
        "Password#123",
        "https://ui.cogmento.com"
      ],
      "line": 41,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    }
  ],
  "keyword": "Examples"
});
});