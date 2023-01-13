const fs=require("fs");
const { resolve } = require("path");
function writeDoc(title,content){
    fs.writeFileSync(title,JSON.stringify(content),"utf-8",(err)=>{
        if(err){
            console.log(err);
        }
    })

}
function getPostData(req){
    return new Promise((resolve,reject)=>{
        try {
            let body='';
            req.on('data',(chunk)=>{
                body+=chunk.toString()
            })
            req.on('end',()=>{
                resolve(body)
            })
        } catch (error) {
            reject(error);
        }
    })
}
module.exports={
    writeDoc,
    getPostData
}