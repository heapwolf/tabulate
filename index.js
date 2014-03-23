var Tabulate = module.exports = function Tabulate(stream) {
  if (!(this instanceof Tabulate)) {
    return new Tabulate(stream)
  }
  this.stream = stream
}

Tabulate.prototype.write = function(items) {

  var output = ''

  output += '\r\n'

  var width = items.reduce(function(a, b) {
    return a.length > b.length ? a : b
  }).length + 2

  var columns = this.stream.columns || 80
  var maxColumns = Math.floor(columns / width) || 1
  var group = []
  var c

  for (var i = 0, compLen = items.length; i < compLen; i++) {
 
    c = items[i]
 
    if (c === '') {
 
      output += print(group, width, maxColumns)
      group = []
    } else {
 
      group.push(c)
    }
  }

  output += print(group, width, maxColumns)
  return output
}

function print(group, width, maxColumns) {

  var output = ''
  
  if (group.length == 0) {
    return
  }

  var minRows = Math.ceil(group.length / maxColumns)

  for (var row = 0; row < minRows; row++) {
    for (var col = 0; col < maxColumns; col++) {
  
      var idx = row * maxColumns + col

      if (idx >= group.length) {
        break
      }

      var item = group[idx]
      
      output += item
      
      if (col < maxColumns - 1) {
        for (var s = 0, itemLen = item.length; s < width - itemLen; s++) {
          output += ' '
        }
      }
    }

    output += '\r\n'
  }

  output += '\r\n'
  return output
}
