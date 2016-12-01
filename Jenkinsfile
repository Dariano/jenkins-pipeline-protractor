node {
  
  def nodeHome = tool name: 'node-7.0.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
  env.PATH = "${nodeHome}/bin:${env.PATH}"
  
  stage 'valida ambiente'
    sh "node -v"
    sh "java -version"
  
  stage 'baixa projeto'
    checkout scm
  
  stage 'instala pacotes'
    sh "npm install"

  stage 'instalando chrome'
    sh 'apt-get -y install libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4'
    sh 'apt-get -y google-chrome-stable'
  
  stage 'testes protractor'
    sh "./node_modules/protractor/bin/webdriver-manager update"
    sh "./node_modules/protractor/bin/webdriver-manager start &"
    sh "./node_modules/protractor/bin/protractor protractor.conf.js"    

}
