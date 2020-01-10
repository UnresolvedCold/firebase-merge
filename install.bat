@echo off

:: update .gitignore
cd ..
echo /functions/index.js.bak >>.gitignore
echo /firebase-merge >>.gitignore

:: create the js directory  
mkdir js
