const path = require('path');
const fs = require('fs');
let elem1= path.join(__dirname,'template.html' )
let a = path.join(__dirname, 'project-dist', 'index.html')
let aa = path.join(__dirname, 'project-dist', 'style.css')
let style = path.join(__dirname, 'styles')
let d = path.join(__dirname, 'project-dist')
let ass = path.join(__dirname, 'project-dist', 'assets')
let red = path.join(__dirname, 'components')
let assets = path.join(__dirname, 'assets')
let en = 1
fs.mkdir(d, { recursive: true },(err)=>{
    if(err){
        throw err
    }
})
fs.mkdir(ass, { recursive: true },(err)=>{
    if(err){
        throw err
    }
})
fs.open(a,'w',(err, fd)=>{
        if(err){
            throw err
        }
    });
fs.open(aa,'w',(err, fd)=>{
        if(err){
            throw err
        }
    });
fs.readFile(elem1,'utf-8', async (err,content)=>{
                if(err){
                    throw err
                }
                let i = content
                let mass = await fs.promises.readdir(red)
                mass.forEach(async (elem)=>{
                    let irrr = path.join(__dirname, 'components', `${elem}`)
                    let ii = await fs.promises.readFile(irrr,'utf-8')
                    i= i.replaceAll(`{{${elem.slice(0, elem.indexOf('.'))}}}`, `${ii}`)
                    en+=1
                    if(en>=mass.length){
                        fs.promises.writeFile(a,i)
                    } 
                })
                })
fs.readdir(style, (err, files)=>{
    if(err){
        throw err
    }
    files.forEach(async (elem)=>{
        let elem1 = path.join(__dirname, 'styles', `${elem}`)
        let i = await fs.promises.readFile(elem1,'utf-8')
        if(files[0]==elem){
            fs.promises.appendFile(aa, i)
        }else{
            fs.promises.appendFile(aa,'\n'+i)
        }
    })
})           
fs.readdir(assets, (err, files)=>{
    if(err){
        throw err
    }
    files.forEach(async (elem)=>{
        let a1 = path.join(__dirname,  'assets', `${elem}`)
        let a2 = path.join(__dirname,'project-dist' , 'assets', `${elem}`)
        let a11= elem
        await fs.promises.rm(a2, { recursive: true, force: true }); 
        fs.mkdir(a2, { recursive: true },(err)=>{
            if(err){
                throw err
            }
        })   
        fs.readdir(a1, (err, file)=>{
            if(err){
                throw err
            }
            file.forEach(el =>{
                let asd = path.join(__dirname, 'assets', `${a11}`, `${el}`)
                let amd = path.join(__dirname, 'project-dist', 'assets',`${a11}`, `${el}`)
                fs.copyFile(asd, amd, (err)=>{
                    if(err){
                        throw err
                    }
                })
            })
        })
    })
})