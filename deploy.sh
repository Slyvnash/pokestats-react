#!/usr/bin/env sh

# abort on errors
set -e

echo "building"
# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'pokestats.info' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

echo "git push to repo"
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:cavisdev/pokestats-react.git master:gh-pages

cd -
