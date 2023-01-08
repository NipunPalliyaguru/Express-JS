const express = require("express");
const { route } = require("./product");
const router = express.Router();


// /user done
router.get('/' , (req,res)=>{
    res.send("user is here");
    
 });


 // /user/get-user-details



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
//done
router.post('/create-user' , (req,res)=>{
    res.send("Create user");
    
 });

//done
 router.put('/update-user' , (req,res)=>{
    res.send("Update user");
  
 });
//done
 router.get('/read-users' , (req,res)=>{
    res.send("read user");
  
 });

//done
 router.delete('/user-delete-users' , (req,res)=>{
    res.send("Delete User");
  
 });

//done Dynamic routing
 router.get('/user-get-users/:id' , (req,res)=>{
   res.send("Get user details "+req.params.id);
 
});

//done Dynamic routing
router.get('/user-get-by-location/:state/:city' , (req,res)=>{
   res.send("Get user details "+req.params.state +" "+ req.params.city);
 
});


router.get('/' ,(req,res,next)=>{
   console.log('API call recieved');
   next();

})


 module.exports=router;