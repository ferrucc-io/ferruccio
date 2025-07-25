#!/bin/bash

cd themes/ferruccio/src
npm run build

cd ..
git add .
git commit -m "Update theme"
git push origin master


cd ../..

git add .
git commit -m "Update site content"
git push origin master

echo "✨ Deployment complete!"