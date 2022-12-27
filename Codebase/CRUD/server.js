const express = require("express")
const app = express()

app.get('/read-users' , (req,res)=>{
res.send("Users is here");


});

app.get('/get-user-details',(req,res)=>{
    const iserOBJ={
        id:10,
        nam:"KAMAL",
        lastName:"JJR",
        status:true
    }
});



app.listen(3001);