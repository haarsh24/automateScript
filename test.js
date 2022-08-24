const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        await driver.get("https://www.opensecrets.org/federal-lobbying/industries/summary?cycle=2021&id=D01");
            
        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("Export to CSV")).sendKeys(searchString,Key.RETURN);
 
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}
 
example()