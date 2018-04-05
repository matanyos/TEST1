
describe('Checkout functionality', function()
 {
      var json = require('./testdata.json');
      var colors = require('colors');
      var originalTimeout;
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    beforeEach(function() 
    {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.get('https://build.mashvisor.com');
    });

        afterEach(function() 
    {
    browser.restart();
    });
  var getRandomEmail = function () {
    var strValues = "abcdefghijk123456789";
    var strEmail = "";
    for (var i = 0; i < strValues.length; i++) {
        strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random())); }
    return strEmail + "@mash.com";};
 var getRandomString = function () {
    var randomText = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    return randomText;};
 it('1- Basic Plan', function() 
  {
    var x = getRandomEmail();
    var y = getRandomString();
    var name = getRandomString();
    browser.sleep(3000);
    element(by.css('.btn-cta-secondary')).click();
    browser.sleep(1000);
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(12000);
    element(by.id('signupSuccessRedirect')).click();
    browser.sleep(3000);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.sleep(1000);
    browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
    browser.sleep(5000);
    element(by.id('dropdownMenu2')).click();
    browser.sleep(2000);
    element(by.css('[ng-click="CC.cart.updatePlan(\'Basic\')')).click();
    var el = element(by.css('.pad-hor.options-container'));
    el.getText().then(function(text){expect(text).toContain("Basic")});
    element(by.id('fullName')).sendKeys(name);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(3000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
    browser.sleep(13000);
    browser.get('https://build.mashvisor.com/explore/#!/profile/');
    browser.refresh();
    browser.sleep(3000);
    browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if(text.includes("BASIC") == true)
            {console.log('.Test Status: PASSED (Registered as a BASIC ACCOUNT)'.green);}
       else {console.log('.Test Status: FAILED (Did not register as a BASIC ACCOUNT)'.red); }     
    });
  });

it('2- Professional Plan', function() 
  {
    var x = getRandomEmail();
    var y = getRandomString();
    var name = getRandomString();
    browser.sleep(3000);
    element(by.css('.btn-cta-secondary')).click();
    browser.sleep(1000);
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(12000);
    element(by.id('signupSuccessRedirect')).click();
    browser.sleep(3000);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.sleep(1000);
    browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
    browser.sleep(5000);
    element(by.id('dropdownMenu2')).click();
    browser.sleep(2000);
    element(by.css('[ng-click="CC.cart.updatePlan(\'Professional\')')).click();
    var el = element(by.css('.pad-hor.options-container'));
    el.getText().then(function(text){expect(text).toContain("Professional")});
    element(by.id('fullName')).sendKeys(name);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(3000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
    browser.sleep(13000);
    browser.get('https://build.mashvisor.com/explore/#!/profile/');
    browser.refresh();
    browser.sleep(3000);
    browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if(text.includes("PROFESSIONAL") == true)
            {console.log('Test Status: PASSED (Registered as a PROFESSIONAL ACCOUNT)'.green);}
       else {console.log('Test Status: FAILED (Did not register as a PROFESSIONAL ACCOUNT)'.red); }       
    });
  });

it('3- Expert Plan', function() 
  {
    var x = getRandomEmail();
    var y = getRandomString();
    var name = getRandomString();
    browser.sleep(3000);
    element(by.css('.btn-cta-secondary')).click();
    browser.sleep(1000);
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(12000);
    element(by.id('signupSuccessRedirect')).click();
    browser.sleep(3000);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.sleep(1000);
    browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
    browser.sleep(5000);
    element(by.id('dropdownMenu2')).click();
    browser.sleep(2000);
    element(by.css('[ng-click="CC.cart.updatePlan(\'Expert\')')).click();
    var el = element(by.css('.pad-hor.options-container'));
    el.getText().then(function(text){expect(text).toContain("Expert")});
    element(by.id('fullName')).sendKeys(name);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(3000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
    browser.sleep(13000);
    browser.get('https://build.mashvisor.com/explore/#!/profile/');
    browser.refresh();
    browser.sleep(3000);
    browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if(text.includes("EXPERT") == true)
            {console.log('Test Status: PASSED (Registered as a EXPERT ACCOUNT)'.green);}
       else {console.log('Test Status: FAILED (Did not register as a EXPERT ACCOUNT)'.red); }       
    });
  });

it('4- Agent Pro ', function() 
  {
    var x = getRandomEmail();
    var y = getRandomString();
    var name = getRandomString();
    browser.sleep(3000);
    browser.get('https://build.mashvisor.com/product/agents-features');    
    browser.sleep(4000);
    browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Pro_Agent_Quarterly\"]\').click()');
    browser.sleep(4000);
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(13000);
    element(by.id('dropdownMenu2')).click();
    browser.sleep(2000);
    element(by.css('[ng-click="CC.agentCart.updatePlan(\'Pro_Agent\')"')).click();
    var el = element(by.css('.pad-hor.options-container'));
    el.getText().then(function(text){expect(text).toContain("Pro Agent")});
    element(by.id('fullName')).sendKeys(name);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(3000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
    browser.sleep(13000);
    browser.get('https://build.mashvisor.com/explore/#!/profile/');
    browser.sleep(5000);
    browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if(text.includes("AGENT PRO") == true)
            {console.log('Test Status: PASSED (Registered as a AGENT PRO)'.green);}
       else {console.log('Test Status: FAILED (Did not register as a AGENT PRO)'.red); }       
    });
  });

it('5- Agent Expert ', function() 
  {
    var x = getRandomEmail();
    var y = getRandomString();
    var name = getRandomString();
    browser.sleep(3000);
    browser.get('https://build.mashvisor.com/product/agents-features');    
    browser.sleep(4000);
    browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Expert_Agent_Quarterly\"]\').click()');
    browser.sleep(4000);
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(13000);
    element(by.id('dropdownMenu2')).click();
    browser.sleep(2000);
    element(by.css('[ng-click="CC.agentCart.updatePlan(\'Expert_Agent\')"')).click();
    var el = element(by.css('.pad-hor.options-container'));
    el.getText().then(function(text){expect(text).toContain("Expert Agent")});
    element(by.id('fullName')).sendKeys(name);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(3000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
    browser.sleep(13000);
    browser.get('https://build.mashvisor.com/explore/#!/profile/');
    browser.sleep(5000);
    browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if(text.includes("AGENT EXPERT") == true)
            {console.log('Test Status: PASSED (Registered as a AGENT EXPERT)'.green);}
       else {console.log('Test Status: FAILED (Did not register as a AGENT EXPERT)'.red); }       
    });
  });

it('6- Agent Top ', function() 
  {
    var x = getRandomEmail();
    var y = getRandomString();
    var name = getRandomString();
    browser.sleep(3000);
    browser.get('https://build.mashvisor.com/product/agents-features');    
    browser.sleep(4000);
    browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Top_Agent_Quarterly\"]\').click()');
    browser.sleep(4000);
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(13000);
    element(by.id('dropdownMenu2')).click();
    browser.sleep(2000);
    element(by.css('[ng-click="CC.agentCart.updatePlan(\'Top_Agent\')"')).click();
    var el = element(by.css('.pad-hor.options-container'));
    el.getText().then(function(text){expect(text).toContain("Top Agent")});
    element(by.id('fullName')).sendKeys(name);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(3000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
    browser.sleep(13000);
    browser.get('https://build.mashvisor.com/explore/#!/profile/');
    browser.sleep(5000);
    browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if(text.includes("AGENT TOP") == true)
            {console.log('Test Status: PASSED (Registered as a AGENT TOP)'.green);}
       else {console.log('Test Status: FAILED (Did not register as a AGENT TOP)'.red); }       
    });
  });




});