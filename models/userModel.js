const users=require("../data/userData.json");
const {v4:uuidv4}=require("uuid")
const {writeDoc} =require("../utils")
function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(users)
    })
}
function findByID(id){
    return new Promise((resolve,reject)=>{
        const user=users.find((k)=>k.id==id);
        resolve(user)
    })

}
function create(user){
    return new Promise((resolve,reject)=>{
        const newUser={id:uuidv4(),...user}
        users.push(newUser)
        writeDoc("./data/userData.json",users);
        resolve(newUser)
    })

}
module.exports={
    findAll,
    findByID,
    create
}