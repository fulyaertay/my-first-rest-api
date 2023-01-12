const userModel=require("../models/userModel")

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

module.exports={
    getUsers,getUser}