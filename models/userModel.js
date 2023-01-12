const users=require("../data/userData.json");

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(users)
    })
}
function findByID(id){
    return new Promise((resolve,reject)=>{
        const user=users.find((k)=>k.id==id);
        console.log(user);
        resolve(user)
    })

}
module.exports={
    findAll,
    findByID
}