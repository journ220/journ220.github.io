#!/bin/zsh
# run with commit message
# source deploy.sh "commit message"

npm run build
git add .
git commit -am $1
git push origin main
git checkout production
git merge main
git push origin production
git checkout main