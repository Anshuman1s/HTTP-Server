const express = require('express');
const app = express();
const PORT = 3000;

const user = [{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]
 app.use(express.json());//For parsing  

app.get('/',function(req,res){
    const johnKidneys = user[0].kidneys;
    let numberOfKidneys = johnKidneys.length
    let numberofHealthyKindneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfKidneys = numberOfKidneys + 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberofHealthyKindneys;
    res.json({
        numberOfKidneys,
        numberofHealthyKindneys,
        numberOfUnHealthyKidneys
    });
})
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put('/',function(req,res){
    for(let i =0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({})
    // Every time when we put the the reaquest getting data should be change in json

})
app.delete('/',function(req,res){
    const newKidney = [];
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    user[0].kidneys = newKidney;
    res.json({msg:"done"})
})

app.listen(PORT,function(){
    console.log(`Server is Running On ${PORT}`);
})