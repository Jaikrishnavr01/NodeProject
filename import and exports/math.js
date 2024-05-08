//method 1  of exporting

// const add = (a,b) => {
//     console.log(a+b)
// }
// module.exports = add

// --------------------------
// method 2

// module.exports = (a,b) => {
//     console.log(a+b);
// }

// --------------------------
//method 3 & 4  of exporting

// const add=(a,b)=>{
//     console.log(a+b)
// }

// const sub=(a,b)=>{
//     console.log(a-b)
// }
// const div=(a,b)=>{
//     console.log(a/b)
// }
// module.exports = {add , sub , div }

// --------------------------
//method 5 of exporting
exports.add=(a,b)=> {
    console.log(a+b);
}

exports.sub=(a,b)=> {
    console.log(a-b);
}

exports.div=(a,b)=> {
    console.log(a/b);
}


