exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  restartBrowserBetweenTests: true,
  specs: ['todo-spec.js'],
  capabilities : {
   'browserName': 'chrome',
    "chromeOptions": {
        binary: "/usr/local/share/"
    }
  },
  framework: 'jasmine2'
};
