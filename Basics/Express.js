const express = require('express');
const app = express();

const PORT = 2100;

app.get('/',function(req,res){
    res.send("Anshuman Shukla.")
})
app.put('/',function(req,res){
    
})

app.listen(PORT,function(){
    console.log(`Server is running on  ${PORT}`);
})