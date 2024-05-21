// Creatng HTTP-Server

const express = require('express') //Bringing the express Library locally to my Machine
const app = express(); // Clinic of Doctor 
const PORT = 3000; //The room where Doctor will meet with patient
app.get('/',function(req,res){
   req.send({
    msg:"Done"
   })
})

app.post('/',function(req,res){
    res.send("Message Recieved")
})
app.listen(PORT,function(){
    console.log(`Port Listeing on ${PORT}`);
})