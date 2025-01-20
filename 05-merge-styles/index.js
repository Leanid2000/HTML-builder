const path = require('path');
const fs = require('fs');
let a  = path.join(__dirname, 'project-dist', 'bundle.css')
let b = path.join(__dirname, 'styles')
fs.open(a,'w',(err, fd)=>{
        if(err){
            throw err
        }
    });
fs.readdir(b, (err, files)=>{
    if(err){
        throw err
    }
    files.forEach(async (elem)=>{
        let elem1 = path.join(__dirname, 'styles', `${elem}`)
        if(path.extname(elem)=='.css'){
            let i = await fs.promises.readFile(elem1,'utf-8')
            if(files[0]==elem){
                fs.promises.appendFile(a, i)
            }else{
                fs.promises.appendFile(a,'\n'+i)
            }
        } 
    })
})