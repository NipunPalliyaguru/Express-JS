const express = require("express")
const app = express()

app.get('/read-users' , (req,res)=>{
res.send("Users is here");

app.use('/product',product);

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


//USER ALL CRUD

app.post('/create-user' , (req,res)=>{
    res.send("Users is here");
    
 });


 app.put('/update-users' , (req,res)=>{
    res.send("Users is here");
  
 });

 app.get('/read-users' , (req,res)=>{
    res.send("Users is here");
  
 });


 app.delete('/delete-users' , (req,res)=>{
    res.send("Users is here");
  
 });




//PRODUCT ALL CRUD


app.post('/create-product' , (req,res)=>{
    res.send("product is here");
    
 });


 app.put('/update-product' , (req,res)=>{
    res.send("product is here");
  
 });

 app.get('/read-product' , (req,res)=>{
    res.send("product is here");
  
 });

 app.get('/get-product-details',(req,res)=>{
    const productOBJ={
        id:1023,
        name:"HDD",
        lastName:"KSS",
        status:true
    }

    res.send(productOBJ);
});
 app.delete('/delete-product' , (req,res)=>{
    res.send("product is here");
  
 });


app.listen(3000);