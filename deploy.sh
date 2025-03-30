#!/bin/bash


HUGO_ENV=production hugo

cd themes/ferruccio
git add .
git commit -m "Update theme"
git push origin master

cd src
npm run build

cd ../../..

git add .
git commit -m "Update site content"
git push origin master

echo "✨ Deployment complete!"