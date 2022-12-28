const express = require("express")
const app = express()

var product = require('./routes/product');

var user = require('./routes/user');

app.get('/', (req, res) => {
   res.send('Hello World!')
 })

app.get('/read-users' , (req,res)=>{
res.send("Users is here");

app.use('/product',product);
app.use('/user',user);

});

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


app.post('/create-product' , (req,res)=>{
    res.send("product is here");
    
 });



app.listen(3000);