#!/usr/local/bin/node

var cli = require('commander')

cli
  .arguments('<message>')
  .option('-a, --add', 'Add log entry')
  .option('-t, --time <time>', 'Timestamp in military time')
  .action(function(message) {
    console.log('message:', message)
    if(cli.add){ add(message, timestamp) }
  })
  .parse(process.argv)

function add(message, time){
  if(!time){
    // set time to cur military time
  }
  // gather log dir from home dir .plog
  // append to current days log, creating if necessary
}
