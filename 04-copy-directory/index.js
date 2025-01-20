const path = require('path');
const fs = require('fs');
let a = path.join(__dirname, 'files-copy')
let aa = path.join(__dirname, 'files')
fs.readdir(aa,  async (err, files)=>{
    if(err){
        throw err
    }
    await fs.promises.rm(a, { recursive: true, force: true })
    await fs.promises.mkdir(a, { recursive: true, force: true })
    files.forEach(elem=>{
        let asd = path.join(__dirname, 'files', `${elem}`)
        let amd = path.join(__dirname, 'files-copy', `${elem}`)
        fs.copyFile(asd, amd, (err)=>{
            if(err){
                throw err
            }           
            
        })
    })
}) 