node {

  stage 'valida ambinete'
    sh 'node -v'
    sh 'gulp -v'
  
  stage 'baixa projeto'
    checkout scm
  state 'instala pacotes'
    sh 'npm install'

}
