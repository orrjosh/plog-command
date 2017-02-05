#!/usr/local/bin/node

var cli = require('commander')
var moment = require('moment')
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

function add(message, timestamp){
  if(!timestamp){
    timestamp = moment(new Date()).format('HHmm')
  }
  console.log('message:', message, " timestamp:", timestamp)
  // gather log dir from home dir .plog
  // append to current days log, creating if necessary
}
