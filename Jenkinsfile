pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Image') {
            steps {
                bat 'docker build -t aarushagrawalmp-cyber/sample-app:v4 .'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker stop jenkins-sample-app || exit 0
                docker rm jenkins-sample-app || exit 0
                docker run -d --name jenkins-sample-app -p 3002:3000 aarushagrawalmp-cyber/sample-app:v4
                '''
            }
        }
    }
}