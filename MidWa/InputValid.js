const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 
// If we not use this req.body.kidneys will not extract 

app.post('/health-checkup',function(req,res){
    // kidney = [1,2]
    // if true
    const kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            msg:"Wrong input"
        })
        // if false
    }else{

        const kidneysLength = kidneys.length;
        res.send("Your kidney length is " + kidneysLength);
    }
})
// Global Catches if Exception Raise This will be handle
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry Something is up with our Server"
    })
})
app.get('/',function(req,res){
    res.send("Anshuman");
}
app.listen(port);
