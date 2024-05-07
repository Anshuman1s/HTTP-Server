const express = require('express');
const app = express();
const port = 1200;

app.use(express.json());                

app.get('/', function(req, res) {
    res.send('Data is coming from the server');
});

app.post('/',function(res,req){
    res.send('Data is coming from the server');
})

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});