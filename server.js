const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);

})
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server starts on ${PORT}`)
})
