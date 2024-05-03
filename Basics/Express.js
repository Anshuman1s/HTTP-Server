const express = require('express');
const app = express();

const PORT = 2100;

app.get('/',function(req,res){
    res.send("Anshuman Shukla")
})

app.listen(PORT,function(){
    console.log(`Server is running ${PORT}`);
})