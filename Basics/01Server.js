const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const PORT = 3001;
app.use(bodyParser.json());
// app.post('/',function(req,res){
//     res.send("Hey Prisha")
//     console.log(req.body)
// })
// app.get('/CallHer',function(req,res){
//     res.send("Can I say you I love you")
// })
// app.get('/Er',(req,res)=>{
//     res.send("Hello Anshuman")
// })

app.post('/send-bodyParser',function(){
    const message = req.body.message;
    console.log(message);

    res.json({
        output:"2+2 is 4"
    })
})

app.listen(PORT,function(){
    console.log("Server is using the port",PORT)
})



