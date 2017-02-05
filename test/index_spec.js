var test = require('tape')
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
