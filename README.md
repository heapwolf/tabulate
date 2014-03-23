# SYNOPSIS
columns for streams

# EXAMPLE
### Code
```js
var Tabulate = require('./index')
var t = Tabulate(process.stdout)

function rnum(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

var r = Array
  .apply(null, Array(130))
  .map(function() { return String(rnum(1, 1e9)) })

console.log(t.write(r))
```

### Output
Here is the output from an actual project that uses the 
[`tabulate`](https://github.com/hij1nx/lev) module.

![img](/cols.png)
