//method 1 and 2 importing

// const add = require('./math')
// add(2,3)

// -------------------------

//method 3 importing

// const math = require('./math')
// math.add(2,3)
// math.sub(2,3)

// --------------------------

//method 4 & 5 importing

const {add, sub,div} = require('./math')
add(2,6)
sub(8,6)
div(8,4)

// --------------------------

