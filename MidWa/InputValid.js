const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 
// If we not use this req.body.kidneys will not extract 

app.post('/health-checkup',function(req,res){
    // kidney = [1,2]
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send("Your kidney length is " + kidneysLength);
})
app.listen(port);