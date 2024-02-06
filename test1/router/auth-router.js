const express=require('express');
const router=express.Router();
const {login,register} = require('../controller/auth-controller')

// router.get('/',login)
router.post('/',login)

router.route('/register').get(register)

module.exports=router;