const express = require('express');
const fs = require('fs');
const port = 3000;
const app = express();

app.get('/files/:fileName',function(req,res){
    const name = req.params.fileName;
    fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        });
    })
});
app.listen(port,function(){
    console.log(`Port for this file is ${port}`);
})