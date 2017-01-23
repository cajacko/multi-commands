# Multi Commands
Npm module to run multiple commands in separate windows at the same time

Useful for easily running multiple watch commands whilst developing e.g. Running a Node Server with Nodemon and developing the front end with a gulp watch task

Works on Windows and Mac OS

Install with
```
npm install multi-commands --save-dev
```
Or install globally with 
```
npm install -g multi-commands
```
You can then run multiple commands using the multi command and enclosing your commands with double quotes:
```
multi "webpack --progress --colors --watch" "nodemon server.js --exec babel-node"
```
