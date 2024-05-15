const express = require('express');
const app = express();
const port = 3000;

let numberOfRequest = 0;

function calculateRequests(req,res,next){
    numberOfRequest++;
    next();
}
app.get('/health-checkup',function(req,res){
    res.send("You want to check  your Health-checkup.");
})
app.get('/health-checkup2',function(req,res){
    res.send("You want to check your Heart-checkup.")
})
app.get('/health-checkup',function(req,res){

})
app.listen(port,function(){
    console.log(`Server is running on port:  ${port}`);
})