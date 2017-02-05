#!/usr/local/bin/node

var cli = require('commander')
var cfg = require('home-config').load('.plog', {
    log_dir : '~/Documents/plog/'
});
cfg.save()

cli
  .arguments('<message>')
  .option('-a, --add', 'Add log entry')
  .option('-t, --timestamp <timestamp>', 'Timestamp in military time')
  .action(function(message) {
    if(cli.add){ add(message, cli.timestamp) }
  })
  .parse(process.argv)

function add(message, time){
  console.log('message:', message)
  if(!time){
    // set time to cur military time
  }
  // gather log dir from home dir .plog
  // append to current days log, creating if necessary
}
