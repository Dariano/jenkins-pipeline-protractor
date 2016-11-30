exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  restartBrowserBetweenTests: true,
  directConnect: true,
  specs: ['todo-spec.js'],
  capabilities : {
   'browserName': 'chrome' 
  },
  chromeOnly: true,
  framework: 'jasmine2'
};
