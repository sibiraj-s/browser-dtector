#!/bin/bash

# copy README, LICENSE and package.json to dist folder
cp ./README.md ./dist/lib/
cp ./LICENSE ./dist/lib/
cp ./package.json ./dist/lib/

# update package.json's after build
node scripts/postbuild.js
