# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# if you are deploying to a custom domain
cd dist
echo 'andrew-drury.com' > CNAME
cd ..

echo Deploying..
git add dist -f
git commit -m "deploying dist"

# deploy
#git subtree push --prefix dist origin gh-pages
# git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages