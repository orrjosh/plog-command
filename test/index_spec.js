var test = require('tape')
var path = require('path')
var fs = require('fs')
var indexMethods = require('../index.js')

test('getLogDate function returns correct format', (t) => {
  t.plan(1)
  let logDate = indexMethods.getLogDate()
  if(logDate.match(/^\d{4}-\d{2}-\d{2}$/)){
    t.ok('date is in the correct format')
  }else{
    console.log(logDate)
    t.fail('date is not in the correct format')
  }
})

test('readFileAsYaml returns object from good yml file', (t) => {
  t.plan(1)
  let file = path.join(__dirname, 'fixtures', 'good.yml');
  t.ok(typeof indexMethods.readFileAsYaml(fs.readFileSync(file)) === 'object')
})

test('readFileAsYaml returns undefined from bad yml file', (t) => {
  t.plan(1)
  let file = path.join(__dirname, 'fixtures', 'bad.yml');
  t.ok(!indexMethods.readFileAsYaml(fs.readFileSync(file)))
})
