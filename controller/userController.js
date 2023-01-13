const userModel=require("../models/userModel")
const {getPostData}=require("../utils")
async function getUsers(req,res){
    try {
        const getUser=await userModel.findAll();
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(getUser))
    } catch (error) {
        console.log(error)
        
    }
}

async function getUser(req,res,id){
    try {
        const getUserID=await userModel.findByID(id);
    
        if(!getUserID){
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message:"not found!"}))

        }else{
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(getUserID))


        }
  
    } catch (error) {
        console.log(error)
        
    }
}
async function createUser(req,res){
    const body=await getPostData(req);
    const {name,surname}=JSON.parse(body)
    try {
        const user={
            name,
            surname
        }
        const newUser=await userModel.create(user)
        res.writeHead(201,{"Content-Type":"application/json"});
        return res.end(JSON.stringify(newUser))
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={
    getUsers,getUser,createUser}