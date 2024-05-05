const express = require('express');
const app = express();
const port = 3000;

app.get('/health-checkup',function(req,res,next){  //Multiple route handler can accept function as argument
    console.log("Hey from req 1");
}),function(req,res){
    console.log("Hey From req 2");
}
app.listen(port);