describe('Checkout functionality', function()
{
    browser.restartBrowserBetweenTests = false;
    
    var webdriver = require('selenium-webdriver');
    var json = require('./testdata.json');
    var colors = require('colors');
    var until = protractor.ExpectedConditions;
    var originalTimeout;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
    var getRandomEmail = function()
    {
        var strValues = "abcdefghijk123456789";
        var strEmail = "";
        for (var i = 0; i < strValues.length; i++)
        {
            strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
        }
        return strEmail + "@automationtests.com";
    };
     var getRandomString = function () {
    var randomText = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    return randomText;};
    beforeEach(function()
    {

        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get(json.website);

    });

   // afterEach(function()
  //  {
    //   browser.restart();
    //});
  it('1- Basic Plan', function()
    {
        var x = getRandomEmail();
        var y = getRandomString();
        element(by.css('.navbar-toggle')).click();
        element(by.css('.btn-cta-secondary')).click();
        element(by.css('.blue-lg-link')).click();
        element(by.id('signup-email')).sendKeys(x);
        element(by.id('signup-password')).sendKeys(json.password);
        browser.sleep(3000);
        element(by.id('signupButton')).click();
        browser.sleep(5000);
        browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000);
        element(by.id('signupSuccessRedirect')).click().then(function(){browser.actions().sendKeys(protractor.Key.ESCAPE).perform();})
        browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
        browser.wait(until.visibilityOf($('#mobile_plan_select')), 200000);
        element(by.id('mobile_plan_select')).click();
        element(by.css('[value="Basic"]')).click();
        element(by.id('fullName')).sendKeys(y);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(5000);
        browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()").then(function()
        {browser.wait(until.urlContains('explore'), 200000)}); 
        browser.get(json.profile);
        browser.sleep(5000);
        browser.wait(until.visibilityOf($('.mainnav-toggle')), 20000);
        element(by.css('.mainnav-toggle')).click();
        browser.wait(until.visibilityOf($('[ui-sref=\"profile\"]')), 20000);
        browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'BASIC',5000), 10000).then(function(){console.log(json.logbp.green)},function(){console.log(json.logbf.red)});
        expect(   ($('[ui-sref=\"profile\"]')).getText()    ).toContain('BASIC');
        browser.close();
});

 /*   it('2- Professional Plan', function()
  {
    var x2 = getRandomEmail();
    var y2 = getRandomString();
    element(by.css('.navbar-toggle')).click();
    element(by.css('.btn-cta-secondary')).click();
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x2);
    element(by.id('signup-password')).sendKeys(json.password);
       browser.sleep(3000);
        element(by.id('signupButton')).click();
        browser.sleep(5000);
    browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000);
    element(by.id('signupSuccessRedirect')).click().then(function(){browser.actions().sendKeys(protractor.Key.ESCAPE).perform();})
    browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
    browser.wait(until.visibilityOf($('#mobile_plan_select')), 200000);
        element(by.id('mobile_plan_select')).click();
        element(by.css('[value="Professional"]')).click();
    element(by.id('fullName')).sendKeys(y2);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(5000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()").then(function()
    {browser.wait(until.urlContains('explore'), 200000)}); 
    browser.get(json.profile);
    browser.wait(until.visibilityOf($('.mainnav-toggle')), 20000);
    element(by.css('.mainnav-toggle')).click();
    browser.wait(until.visibilityOf($('[ui-sref=\"profile\"]')), 20000);
    browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'PROFESSIONAL',2000), 5000).then(function(){console.log(json.logpp.green)},function(){console.log(json.logpf.red)});
    });

    it('3- Expert Plan', function()
  {
    var x3 = getRandomEmail();
    var y3 = getRandomString();
    element(by.css('.navbar-toggle')).click();
    element(by.css('.btn-cta-secondary')).click();
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x3);
    element(by.id('signup-password')).sendKeys(json.password);
       browser.sleep(3000);
        element(by.id('signupButton')).click();
        browser.sleep(5000);
    browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000);
    element(by.id('signupSuccessRedirect')).click().then(function(){browser.actions().sendKeys(protractor.Key.ESCAPE).perform();})
    browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
    browser.wait(until.visibilityOf($('#mobile_plan_select')), 20000);
        element(by.id('mobile_plan_select')).click();
        element(by.css('[value="Expert"]')).click();
    element(by.id('fullName')).sendKeys(y3);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(7000);
        browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()").then(function()
        {browser.wait(until.urlContains('explore'), 200000)}); 
        browser.get(json.profile);
        browser.wait(until.visibilityOf($('.mainnav-toggle')), 20000);
        element(by.css('.mainnav-toggle')).click();
        browser.wait(until.visibilityOf($('[ui-sref=\"profile\"]')), 20000);
    browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'EXPERT',2000), 5000).then(function(){console.log(json.logep.green)},function(){console.log(json.logef.red)});
    });

    it('4- Agent Pro ', function()
    {
        var q = getRandomEmail();
        browser.get(json.product);
        //browser.wait(until.visibilityOf($('[href=\"/checkout#?role=agent&plan=Mashvisor_Pro_Agent_Quarterly\"]')), 20000);
        browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Pro_Agent_Quarterly\"]\').click()');
        browser.wait(until.visibilityOf($('#signup-email')), 20000);
       // browser.sleep(4000);
        element(by.id('signup-email')).sendKeys(q);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
      //  browser.sleep(13000);
        browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
        element(by.id('dropdownMenu2')).click();
        //browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Pro_Agent\')"')).click();
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(3000);
        browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
        browser.wait(until.urlContains('explore'), 20000);
        browser.get(json.profile);
 browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'AGENT PRO',2000), 5000).then(function(){console.log(json.logapp.green)},function(){console.log(json.logapf.red)});
    });

    it('5- Agent Expert ', function()
    {
        var v = getRandomEmail();
        browser.sleep(3000);
        browser.get(json.product);
        browser.sleep(4000);
        browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Expert_Agent_Quarterly\"]\').click()');
        browser.sleep(4000);
        element(by.id('signup-email')).sendKeys(v);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        browser.sleep(13000);
        element(by.id('dropdownMenu2')).click();
        browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Expert_Agent\')"')).click();
        var el = element(by.css('.pad-hor.options-container'));
        el.getText().then(function(text)
        {
            expect(text).toContain("Expert Agent")
        });
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(3000);
        browser.executeScript(
            "document.querySelector('[value=\"Start Subscription\"]').click()");
        browser.sleep(13000);
        browser.get(json.profile);
        browser.wait(until.visibilityOf($('[ui-sref=\"profile\"]')), 20000);
        //browser.sleep(5000);
        browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if (text.includes("AGENT EXPERT") == true)
            {
                console.log(json.logaep.green);
            }
            else
            {
                console.log(json.logaef.red);
            }
        });
    });

    it('6- Agent Top ', function()
    {
        var t = getRandomEmail();
        browser.sleep(3000);
        browser.get(json.product);
        browser.sleep(4000);
        browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Top_Agent_Quarterly\"]\').click()');
        browser.sleep(2000);
        element(by.id('signup-email')).sendKeys(t);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        browser.sleep(13000);
        element(by.id('dropdownMenu2')).click();
        browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Top_Agent\')"')).click();
        var el = element(by.css('.pad-hor.options-container'));
        el.getText().then(function(text)
        {
            expect(text).toContain("Top Agent")
        });
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(3000);
        browser.executeScript(
            "document.querySelector('[value=\"Start Subscription\"]').click()");
        browser.sleep(13000);
        browser.get(json.profile);
        browser.wait(until.visibilityOf($('[ui-sref=\"profile\"]')), 20000);
        browser.executeScript("return $('[ui-sref=\"profile\"]').text()").then(function(text)
        {
            if (text.includes("AGENT TOP") == true)
            {
                console.log(json.logatp.green);
            }
            else
            {
                console.log(json.logatf.red);
            }
        });
    });*/

});