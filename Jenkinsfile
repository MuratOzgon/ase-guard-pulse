pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "musasariyar/ase-guard-pulse"
        VERSION = "v1.0.${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        userRemoteConfigs: [[
                            url: 'https://github.com/MuratOzgon/ase-guard-pulse.git',
                            credentialsId: 'github'
                        ]]
                    ])
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${VERSION} -t ${DOCKER_IMAGE}:latest ."
            }
        }

        stage('Login to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    }
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                sh "docker push ${DOCKER_IMAGE}:${VERSION}"
                sh "docker push ${DOCKER_IMAGE}:latest"
            }
        }

        stage('Update Kubernetes Deployment') {
            steps {
                dir('ase-guard-pulse-k8s') {
                    withCredentials([usernamePassword(
                        credentialsId: 'github',
                        usernameVariable: 'GITHUB_USER',
                        passwordVariable: 'GITHUB_TOKEN'
                    )]) {
                        sh '''
                        set +x
                        REPO="https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/musasariyar/ase-guard-pulse-k8s.git"
                        [ -d .git ] || git init -q
                        for i in 1 2 3 4 5; do
                          git fetch -q "$REPO" main
                          git checkout -q -f FETCH_HEAD
                          sed -i "s|image: musasariyar/ase-guard-pulse:.*|image: musasariyar/ase-guard-pulse:${VERSION}|" deployment.yaml
                          git add deployment.yaml
                          if git diff --cached --quiet; then echo "No changes, skipping"; exit 0; fi
                          git -c user.name="Jenkins CI" -c user.email="jenkins@musasariyar.com" \
                            commit -q -m "Update deployment image to ${DOCKER_IMAGE}:${VERSION}"
                          git push -q "$REPO" HEAD:main && exit 0
                          echo "Push rejected (attempt $i), retrying..."; sleep $((i * 5))
                        done
                        exit 1
                        '''
                    }
                }
            }
        }
    }
}
