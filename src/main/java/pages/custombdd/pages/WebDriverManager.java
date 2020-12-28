package pages.custombdd.pages;

import java.net.MalformedURLException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.cucumber.core.api.Scenario;

public class WebDriverManager {

	public static WebDriver driver;
	public Properties defaultProp;
	
	public WebDriver getDriver(String sValue) throws MalformedURLException {
		driver = startDriver(sValue, 120);
		return driver;
	}

	public WebDriver getDriver() {
		return driver;
	}

	public void closeDriver(Scenario scenario) throws Throwable {
			try {
				driver.close();
			} catch (Exception ex) {
			}
	}

	/*
	 *  Set parameters for the webDriver
	*/

	private WebDriver startDriver(String type, int timeout) throws MalformedURLException {
		if(type.equals("chrome")){
			ChromeOptions options = new ChromeOptions();
			options.addArguments("disable-infobars");
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setBrowserName(type);
			capabilities.setCapability("seleniumProtocol", "WebDriver");
			capabilities.setCapability(CapabilityType.HAS_NATIVE_EVENTS, false);
			capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
			capabilities.setCapability(ChromeOptions.CAPABILITY, options);

			/*
			 *   Modify below Line According to Your Operating System
			 */
			
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/driverConfig/chrome/chromedriver.exe");
			driver = new ChromeDriver(capabilities);
			 driver.manage().window().maximize();
			 driver.manage().deleteAllCookies();
			 driver.manage().timeouts().setScriptTimeout(120, TimeUnit.SECONDS);
			 driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
		}
		return driver;
	}

}