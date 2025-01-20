const path = require('path');
const fs = require('fs');
const process = require('process')
let arr = path.join(__dirname, 'text.txt')
function func(){
    fs.open(arr,'w',(err, fd)=>{
        if(err){
            throw err
        }
    });
    process.stdout.write("Please enter the text"+'\n')
}
process.stdin.on('data', function(data){
    if(data.toString()==="exit"+'\r'+'\n'){
        process.stdout.write('\n'+'Goodbye');
        process.exit()
    }
    fs.appendFile(arr, data ,(err, fd)=>{
        if(err){
            throw err
        }
    })
})
process.on("SIGINT", function(){
    process.stdout.write('\n'+'Goodbye');
    process.exit()
})
func()