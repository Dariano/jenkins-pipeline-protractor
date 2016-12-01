exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar',
  directConnect: true,
  specs: ['todo-spec.js'],
  capabilities : {
    'browserName': 'chrome'
  },
  framework: 'jasmine2'
};
