
const { exec } = require('node:child_process')


exec('echo hello',(err,stdout)=>{
    if(err){
        console.error('/n'+err)
        return
    } 
    console.log(stdout);
})