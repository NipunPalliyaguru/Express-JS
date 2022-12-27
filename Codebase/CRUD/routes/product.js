const express = require("express")
const router = express.Router();


// /product
router.get('/' , (req,res)=>{
    res.send("product is here");
    
 });


 // /product/get-product-details
 router.get('/get-product-details' , (req,res)=>{
    res.send("get request from products");
    
 });


 module.exports=router;