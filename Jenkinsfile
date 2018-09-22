pipeline {
  environment {
    registry = "fosfo/demo"
    registryCredential = "dockerhub"
  }

  agent any
  
  stages {
    stage('github') {
      steps {
        git 'https://github.com/fosfobd/testws'
      }
    }
    stage('build') {
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
