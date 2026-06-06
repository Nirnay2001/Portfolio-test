pipeline {
    agent any
    tools{
        nodejs 'node18'
    }

    stages {
        stage('Pre-condition run'){
            steps{
                sh 'rm -rf Portfolio-test'
            }
        }
        stage('version check') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'git --version'
            }
        }
        stage('test repo clone'){
            steps{
                sh 'git clone https://github.com/Nirnay2001/Portfolio-test.git'
            }
        }
        stage('Install Dependencies'){
            steps{
                dir('Portfolio-test'){
                    sh 'npm ci'
                }
            }
        }
        stage('Install browser'){
            steps{
                dir('Portfolio-test'){
                    sh 'npx playwright install'
                }
            }
        }
        stage('run test'){
            steps{
                dir('Portfolio-test'){
                    sh 'npx playwright test --reporter=html'
                }
            }
        }
    }
    post {
        always {
            dir('Portfolio-test'){
                publishHTML([
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }
}
