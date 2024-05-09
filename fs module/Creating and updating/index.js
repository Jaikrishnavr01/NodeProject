const fs=require('node:fs')
fs.writeFileSync('./data.txt', 'hello jk this your created file')  // to create a file
fs.writeFile('./data.txt', ' hello jk this your updated file' ,{flag:"a"}, (err) => {
    if(err){
        console.log(err);
    }
    else { 
        console.log("file was updated successfully")
    }
})