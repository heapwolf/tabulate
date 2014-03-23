var Tabulate = require('./index')
var t = Tabulate(process.stdout)

function rnum(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

var r = Array
  .apply(null, Array(130))
  .map(function() { return String(rnum(1, 1e9)) })

console.log(t.write(r))
