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
  var cmd = 'start cmd /k ' + param
  exec(cmd, function(error, stdout, stderr) {
    console.log(error, stdout, stderr)
  })
})
