const fs = require("node:fs")
fs.unlink('./data.txt',(err) => {
    if(err) {
        console.log(err);
    }
    else{
        console.log("Deleted successfully")
    }
})