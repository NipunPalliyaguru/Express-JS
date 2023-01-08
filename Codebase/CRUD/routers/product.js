const express = require("express")
const router = express.Router();


// /product
router.get('/' , (req,res)=>{
    res.send("product is here");
    
 });


 // /product/get-product-details --done
//  router.get('/get-product-details' , (req,res)=>{
//     res.send("get request from products");
    
//  });


 router.put('/update-product' , (req,res)=>{
   res.send("product is updated");
 
});

router.get('/read-product' , (req,res)=>{
   res.send("product is here");
 
});

router.post('/get-product-details',(req,res)=>{
   const productOBJ={
       id:1023,
       name:"HDD",
       lastName:"KSS",
       status:true
   }

   res.send(productOBJ);
});
router.delete('/delete-product' , (req,res)=>{
   res.send("product deleted");
 
});

 module.exports=router;