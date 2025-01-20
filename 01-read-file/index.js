const path = require('path');
const fs = require('fs');
let arr = path.join(__dirname, 'text.txt')
let a = fs.createReadStream(arr)
a.on('data', (data) =>{
    console.log(data.toString())
})