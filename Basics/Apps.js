const express = require('express');
const app = express();
const port = 2000;

app.get('/',function(req,res){
    res.send({
        msg:"done"
    })
})
app.get('/profile',function(req,res){
res.send({
    username:"Anshuman"
})
})