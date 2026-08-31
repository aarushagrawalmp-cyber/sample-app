pipeline {
    agent {
        docker {
            image 'node:22'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Image') {
            steps {
                sh 'docker build -t aarushagrawalmp-cyber/sample-app:v4 .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop jenkins-sample-app || true
                docker rm jenkins-sample-app || true
                docker run -d --name jenkins-sample-app -p 3003:3000 aarushagrawalmp-cyber/sample-app:v4
                '''
            }
        }
    }
}