
const http=require("http");
const {getUsers}= require("./controller/userController")
const server=http.createServer((req,res)=>{
    // // console.log(req.url);
    // res.statusCode=200;
    // res.setHeader("Content-Type","text/html")
    // res.write("<h1>Hello NodeJS</h1>")
    // res.end();
    if(req.url==='/api/users' && req.method==='GET'){
        getUsers(req,res)

    }else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.end(JSON.stringify({"message":"Not Found!"}))
    }

})
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server starts on ${PORT}`)
})
