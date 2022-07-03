#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deployment'
git push -f git@github.com:Azthma/azt-webmagz.git master:gh-pages-1

cd -