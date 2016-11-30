exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  restartBrowserBetweenTests: true,
  specs: ['todo-spec.js'],
  capabilities : {
   'browserName': 'chrome',
    "chromeOptions": {
        binary: "/usr/bin/"
    }
  },
  framework: 'jasmine2'
};
