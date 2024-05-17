const express= require('express')
const app = express();
const port = 4000;

app.get('/healthCheckup',function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "Anshuman" || password !='password123'){
        res.status(400).json({"msg": "Somthing up with you inputs"});
        // do something with kideney
        return 
        
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg": "Something up with your inputs. "});
    }
    
    res.json({
        msg:"Your Kidney is Fine"
    })

});
app.listen(port)