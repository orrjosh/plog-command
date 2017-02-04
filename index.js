#!/usr/local/bin/node

var cli = require('commander')

cli
  .arguments('<message>')
  .option('-a')
  .action(function(message) {
    console.log('message:', message)
  })
  .parse(process.argv)
