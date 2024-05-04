const express = require("express");

const app = express();
const port = 3001;
// req and res => request and resposnse
app.get('/',function(req,res){
    
})

app.listen(port,function(){
    console.log(`Port is working on ${port}`);
})