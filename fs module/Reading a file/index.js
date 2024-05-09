const fs = require('node:fs')

console.log("first")
const datas = fs.readFileSync('./file.txt', 'utf-8')
console.log(datas)

console.log("second")
fs.readFile('./file.txt', 'utf-8', (err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
})
console.log("third")