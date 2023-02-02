pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt-get install -y nodejs"
                sh "node -v"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/react-app/"
            }
        }
    }
}
