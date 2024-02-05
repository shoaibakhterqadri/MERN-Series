const express=require('express');
const router=express.Router();
const {login}=require('../controller/auth-controller')


router.get('/login',login)

// OR you may write this also 

router.route('/').get((req,res)=>{
    res.status(200).send("Welcome to the Home Page by Routing");
})

module.exports=router;