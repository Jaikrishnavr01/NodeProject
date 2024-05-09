const fs = require('fs');
const zlib = require('zlib');

const zip = zlib.createGzip();

const readableStream = fs.createReadStream('./file1.txt', {
    encoding: "utf-8",
    highWaterMark: 2 
});

const writableStream = fs.createWriteStream('./file3.txt.zip');

readableStream.pipe(zip).pipe(writableStream);
