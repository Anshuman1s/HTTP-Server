const express = require('express');
const app = express();
const port = 3000;

let numberOfRequest =0;

function calculateRequests(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}

app.use(express.json());

// We can pass function in app.use(functionName)

app.get('/health-checkup',function(req,res){
    console.log(req.body);
    res.json({
        msg: "Hey Anshuman"
    })
})
app.post('/',function(req,res){
    res.send();
})

app.listen(port);