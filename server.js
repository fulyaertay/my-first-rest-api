
const http=require("http");
const datas=require("./data/userData.json")
const server=http.createServer((req,res)=>{
    // // console.log(req.url);
    // res.statusCode=200;
    // res.setHeader("Content-Type","text/html")
    // res.write("<h1>Hello NodeJS</h1>")
    // res.end();
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(datas))
})
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server starts on ${PORT}`)
})
