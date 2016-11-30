node {
  
  def nodeHome = tool name: 'node-7.0.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
  env.PATH = "${nodeHome}/bin:${env.PATH}"
  
  stage 'valida ambiente'
    sh "node -v"
  
  stage 'baixa projeto'
    checkout scm
  
  stage 'instala pacotes'
    sh "npm install"

  stage 'testes protractor'
    sh "protractor protractor.conf.js"

}
