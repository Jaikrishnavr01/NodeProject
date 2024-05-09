// const { log } = require("console")

const buffer = new Buffer.from('hello jai')
buffer.write('welcome')

console.log(buffer)
console.log(buffer.toJSON())
console.log(buffer.toString())