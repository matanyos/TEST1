
describe('Sign in/Sign up functionality', function()
 {
      var json = require('./testdata.json');
      var colors = require('colors');
      var originalTimeout;
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
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
  it('1- Google sign in', function() 
  {

    element(by.css('.btn-cta-secondary')).click();
    element(by.id('googleLoginButton')).click();
    browser.sleep(2000);
    element(by.id('identifierId')).sendKeys(json.googleemail);
    element(by.id('identifierNext')).click();
    browser.sleep(2000);
    element(by.css('.whsOnd.zHQkBf')).sendKeys(json.googlepw);
    element(by.id('passwordNext')).click();
    browser.sleep(13000);
    browser.getCurrentUrl().then(function(text)
        {
            if(text.includes("explore") == true)
            {console.log('..Test status: PASSED (Signed in with Google Account)'.green);}
       else {console.log('..Test Status: FAILED (Did not Sign in with Google Account)'.red); }

   // expect(browser.getCurrentUrl()).toContain('explore1').then(function(text)
   // {console.log('..Test status: PASSED (Signed in with Google Account)'.green)});
  });
});

    it('2- Sign in with existing user', function() 
  {
    element(by.css('.btn-cta-secondary')).click();
    element(by.id('login-email')).sendKeys(json.existacc);
    element(by.id('login-password')).sendKeys(json.existaccpw);
    element(by.id('loginButton')).click();
    browser.sleep(5000);
    browser.getCurrentUrl().then(function(text)
        {
            if(text.includes("explore") == true)
            {console.log('..Test2 status: PASSED (Signed in with Existing Account)'.green);}
       else {console.log('..Test2 Status: FAILED (Did not Sign in with Existing Account)'.red); }
  });
  });
 it('3- Sign up as new user', function() 
  {
////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////
    var x = getRandomEmail();
    var y = getRandomString();
    browser.sleep(5000);
    element(by.css('.btn-cta-secondary')).click();
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x);
    element(by.id('signup-password')).sendKeys(y);
    element(by.id('signupButton')).click();
    browser.sleep(10000);
    element(by.id('signupSuccessRedirect')).click();
    browser.sleep(5000);
    browser.getCurrentUrl().then(function(text)
        {
            if(text.includes("explore") == true)
            {console.log('..Test3 status: PASSED (Signed up as New User)'.green);}
       else {console.log('..Test3 Status: FAILED (Did not Sign in as New User)'.red); }
  });
});

});