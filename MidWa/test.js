const express = require('express');
const app = express();

const port = 3000;

console.log(express);
console.log(app);

// app.get('/login',function(req,res){
//     res.send('Hey')
// });


app.post('/upload',function(req,res){
    res.sendStatus(`img src ="url"`)
})
app.delete('/profile',function(req,res){
    // remove profile image using thos route
})
app.listen(port,function(){
    console.log(`Server is runnng on port number: ${port}`);
})