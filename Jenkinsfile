pipeline {
  environment {
    registry = "fosfo/demo"
    registryCredential = "dockerhub"
  }

  agent any
  
  stages {
    stage('build') {
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
