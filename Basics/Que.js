const express = require('express');
const app = express();
const port = 2000;

app.get('/',function(req,res){
    res.send("First Route");
})

