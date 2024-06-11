const express = require('express');
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send("Anshuman")
})
app.post("/",function(req,res){
    
})
app.get("/profile",function(req,res){
    res.send(``)
})
app.listen(port,function(){
   console.log(`Server is running on port ${port}`);
})