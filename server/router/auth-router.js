const express=require('express');
const router=express.Router();
const {login,register}=require('../controller/auth-controller')
const validate=require('../middlewares/validate-middleware');
const signupSchema=require('../validators/auth-validator')

router.post('/register',validate(signupSchema), register)
router.post('/login',login);

// OR you may write this also 

router.route('/').get((req,res)=>{
    res.status(200).send("Welcome to the Home Page by Routing");
})

module.exports=router;