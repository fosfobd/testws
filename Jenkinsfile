pipeline {
  agent { docker { image 'node:8.12.0-alpine' } }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
      }
    }
    stage('publish') {
      steps {
        sh 'docker push fosfo/demo'
      }
    }
  }
}
