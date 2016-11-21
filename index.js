#!/usr/bin/env node
var fs = require('fs')
var exec = require('child_process').exec

var params = process.argv
params.shift()
params.shift()

if (!params.length) {
  throw "No command specified"
}

params.forEach(function(param) {
  var cmd

  if (process.platform === 'win32') {
    cmd = 'start cmd /k ' + param
  } else {
    // console.log(process.cwd())
    cmd = 'osascript -e \'tell application "Terminal" to do script "cd ' + process.cwd() + ' && ' + param + '"\''
  }

  exec(cmd, function(error, stdout, stderr) {
    console.log(error, stdout, stderr)
  })
})
