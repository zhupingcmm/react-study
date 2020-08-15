const fs = require('fs');
const path = require('path');

async function readContent(path){
    return await new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf8',(error,data)=>{
            if(error) reject(error);
            resolve(data);
        })
    })
}

module.exports ={
    readContent
}