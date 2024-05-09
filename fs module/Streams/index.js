const fs = require('node:fs')
const readableStream = fs.createReadStream('./file1.txt',{
    encoding:"utf-8",
    highWaterMark:3
})

const writableStream = fs.createWriteStream('./file2.txt')

readableStream.on('data',(chunk) => {
    console.log(chunk);
    writableStream.write(chunk)
})