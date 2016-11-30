node {
  
  def nodeHome = tool name: 'node-7.0.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
  env.PATH = "${nodeHome}/bin:${env.PATH}"
  
  stage 'valida ambiente'
    sh "node -v"
    sh "gulp -v"
  
  stage 'baixa projeto'
    checkout scm
  
  state 'instala pacotes'
    sh "npm install"

}
