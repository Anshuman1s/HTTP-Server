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
    username:"Anshuman",
    profile_pic:'<img src="">',
    edit:true
})
})
app.post('/edit',function(req,res){
    const n = req.query.n
})
app.listen(port,function(){
    console.log("Server is running on "+port);
})