const path = require('path');
const fs = require('fs');
let arr = path.join(__dirname, 'secret-folder')
fs.readdir(arr, {withFileTypes: true},(err, files)=>{
    if(err){
        throw err
    }
    let am = []
    files.forEach(elem=>{
        if(!elem.isDirectory()){
            let i = path.join(__dirname, 'secret-folder', `${elem.name}`)
        am.push(path.extname(elem.name).slice(1))
        fs.stat(i, (err, stats)=>{
    if(err){
        throw err
    }
   console.log(`${elem.name.slice(0, elem.name.indexOf('.'))} - ${path.extname(elem.name).slice(1)} - ${stats.size}b`)
   })
        }       
    })
})
