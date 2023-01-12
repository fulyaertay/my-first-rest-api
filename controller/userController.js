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

module.exports={
    getUsers}