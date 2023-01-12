const users=require("../data/userData.json");

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(users)
    })
}
module.exports={
    findAll
}