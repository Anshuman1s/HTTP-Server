const express = require('express');
const app = express();
const port = 2000;

app.get('/',function(req,res){
    res.send("First Route.");
})
app.post('/',function(req,res){
    const n = req.query.n;
    res.send("Posted.")
})
app.listen(port,function(){
    console.log(`Server is running on. no ${port}`);
})