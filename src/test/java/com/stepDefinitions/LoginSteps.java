package com.stepDefinitions;

import org.openqa.selenium.WebDriver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;
import io.cucumber.java.After;
import pages.custombdd.pages.WebDriverManager;

public class LoginSteps {
	
	public WebDriver driver;
	public WebDriverManager webDriverManager;

	@Before("@UI")
	public void before() throws Throwable {
		System.out.println("Testing");
		webDriverManager = new WebDriverManager();
		String browserName = "chrome";
		driver = webDriverManager.getDriver(browserName);
	}

	@After("@UI")
	public void after(Scenario scenario) throws Throwable {
		webDriverManager.closeDriver(scenario);
	}

}