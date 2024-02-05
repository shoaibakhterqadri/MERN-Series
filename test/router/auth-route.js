const express=require('express');
const router=express.Router();

router.get('/login',(req,res)=>{
    res.send("This is router home page");
})

// or 

router.route("/").get((req,res)=>{
    res.send("This is router home page by using routing");
})

module.exports=router;