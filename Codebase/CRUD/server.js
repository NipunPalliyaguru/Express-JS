const express = require("express")
const app = express()
var product = require('./routers/product');
var user = require('./routers/user');


var mongoose = require("mongoose");
var dbURL = require("./properties").DB_URL;

mongoose.connect(dbURL);


mongoose.connection.on("Connected",()=>{
    console.log("DB CONNECT SUCCESSEED");
});








app.use('/product',product);
 
app.use('/user',user);

app.get('/', (req, res) => {
   res.send('Hello World!')
 })


 //done
app.get('/read-users' , (req,res)=>{
res.send("Users is here");




});


//done
app.get('/get-user-details',(req,res)=>{
    const userOBJ={
        id:10,
        nam:"KAMAL",
        lastName:"JJR",
        status:true
    }

    res.send(userOBJ);
});

//PRODUCT ALL CRUD

//done
app.get('/create-product' , (req,res)=>{
    res.send("product is here");
    
 });


app.listen(3000);


