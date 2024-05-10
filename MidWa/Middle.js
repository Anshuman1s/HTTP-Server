const express = require('express');
const app = express();
const port = 3000;

let numberOfRequest = 0;

function calculateRequests(req,res,next){
    numberOfRequest++;
    next();
}
app.get('/health-checkup',function(req,res){
    
})
app.get('/health-checkup2',function(req,res){

})
app.get('/health-checkup',function(req,res){

})