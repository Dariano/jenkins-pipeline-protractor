exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
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
