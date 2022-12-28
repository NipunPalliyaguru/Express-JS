const express = require("express")
const router = express.Router();


// /user
router.get('/' , (req,res)=>{
    res.send("user is here");
    
 });


 // /user/get-user-details
 router.get('user/get-user-details' , (req,res)=>{
    res.send("get request from user");
    
 });

 router.get('/get-user-details',(req,res)=>{
    const userOBJ={
        id:10,
        nam:"KAMAL",
        lastName:"JJR",
        status:true
    }

    res.send(userOBJ);
});


//USER ALL CRUD

router.post('/create-user' , (req,res)=>{
    res.send("Users is here");
    
 });


 router.put('/update-users' , (req,res)=>{
    res.send("Users is here");
  
 });

 router.get('/read-users' , (req,res)=>{
    res.send("Users is here");
  
 });


 router.delete('/delete-users' , (req,res)=>{
    res.send("Users is here");
  
 });





 module.exports=router;