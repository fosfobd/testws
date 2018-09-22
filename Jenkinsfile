pipeline {
  environment {
    registry = "fosfo/demo"
    registryCredential = "dockerhub"
    dockerImage = ''
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
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('publish') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }  
        }
      }
    }
  }
}
