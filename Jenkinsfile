pipeline {
  environment {
    registry = "fosfo/demo"
    registryCredential = "dockerhub"
    dockerImage = ''
  }

  agent any
  
  tools {
    nodejs "node"
  }

  stages {
    stage('GitHub Clone') {
      steps {
        git 'https://github.com/fosfobd/testws'
      }
    }
    stage('Nodejs build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Docker build') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Docker push') {
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
