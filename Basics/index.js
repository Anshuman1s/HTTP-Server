
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', function(req, res){
//   res.send('Hello World!')
// })


// app.listen(port)

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send("Hey Anshuman, how are you?");
});

app.get('/route-handler', function(req, res) {
    res.json({
        name: "Anshuman",
        age: 18
    });
});
// app.post('/conversation',function(req,res){
//     console.log(req.body);
//     res.send({
//         name:"Hello World"
//     });
// });

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});
