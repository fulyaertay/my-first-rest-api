
const http=require("http");
const {getUsers,getUser, createUser,updateUser}= require("./controller/userController")
const server=http.createServer((req,res)=>{
    // // console.log(req.url);
    // res.statusCode=200;
    // res.setHeader("Content-Type","text/html")
    // res.write("<h1>Hello NodeJS</h1>")
    // res.end();
    //GET METHOD
    if(req.url==='/api/users' && req.method==='GET'){
        getUsers(req,res)

    //GET by User ID
    }else if(req.url.match(/\api\/user\/([0-9]+)/)&& req.method==='GET'){
        const id=req.url.split('/')[3];
        getUser(req,res,id)

        //POST METHOD
    }else if(req.url==='/api/user' && req.method==="POST"){
        createUser(req,res)

        //PUT METHOD
    }else if(req.url.match(/\api\/user\/([0-9]+)/)&& req.method==='PUT'){
        const id=req.url.split('/')[3];
        updateUser(req,res,id)
    }
    //If 404, return error message
    else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.end(JSON.stringify({"message":"Not Found!"}))
    }

})
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server starts on ${PORT}`)

})

