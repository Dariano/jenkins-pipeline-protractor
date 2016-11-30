node {
  
  stage 'install node'
    def nodeHome = tool name: 'node-7.0.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    sh "${nodeHome}/bin/node -v"
  
  stage 'valida ambinete'
    sh 'node -v'
    sh 'gulp -v'
  
  stage 'baixa projeto'
    checkout scm
  
  state 'instala pacotes'
    sh 'npm install'

}
