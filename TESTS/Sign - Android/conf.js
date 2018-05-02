
exports.config = 
{

	specs: ['todo-spec.js'],
  SeleniumAddress: "http://localhost:4723/wd/hub",
  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    deviceName: 'emulator-5554',
    appWaitActivity: "StartScreenActivity"
    framework: 'jasmine2',


        

    }
  

