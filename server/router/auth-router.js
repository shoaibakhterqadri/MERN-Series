const express=require('express');
const router=express.Router();
const {login,register}=require('../controller/auth-controller')


router.post('/register',register)
router.post('/login',login);

// OR you may write this also 

router.route('/').get((req,res)=>{
    res.status(200).send("Welcome to the Home Page by Routing");
})

module.exports=router;