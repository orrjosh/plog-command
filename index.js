#!/usr/local/bin/node

var cli = require('commander')
var moment = require('moment')
var fs = require('fs')
var yaml = require('js-yaml');
var expandHomeDir = require('expand-home-dir')

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
  console.log('cfg.log_dir:', cfg.log_dir)
  console.log(getLogDate())
  writeToFile()
}

function writeToFile(){
  let path = expandHomeDir(cfg.log_dir + getLogDate())
  console.log(path)
  console.log(fileExists(path))

}

function readFileAsYaml(path){
  try {
    return yaml.safeLoad(path)
  } catch(e) {
    console.error(e)
    return
  }
}

function fileExists(filePath){
  return fs.existsSync(filePath)
}

function getLogDate(){
  return moment(new Date()).format('YYYY-MM-DD')
}

exports.getLogDate = getLogDate
exports.readFileAsYaml = readFileAsYaml
