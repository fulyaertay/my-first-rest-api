const fs=require("fs");
function writeDoc(title,content){
    fs.writeFileSync(title,JSON.stringify(content),"utf-8",(err)=>{
        if(err){
            console.log(err);
        }
    })

}

module.exports={
    writeDoc
}