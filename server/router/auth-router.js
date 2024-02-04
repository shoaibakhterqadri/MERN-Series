const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("Welcome to the Home Page by Routing");
})

// OR you may write this also 

router.route('/').get((req,res)=>{
    res.status(200).send("Welcome to the Home Page by Routing");
})

module.exports=router;