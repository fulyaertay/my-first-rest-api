
const http=require("http");
const datas=require("./data/userData.json")
const server=http.createServer((req,res)=>{
    // // console.log(req.url);
    // res.statusCode=200;
    // res.setHeader("Content-Type","text/html")
    // res.write("<h1>Hello NodeJS</h1>")
    // res.end();
    if(req.url==='/api/users' && req.method==='GET'){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(datas))

    }else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.end(JSON.stringify({"message":"Not Found!"}))
    }

})
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server starts on ${PORT}`)
})
