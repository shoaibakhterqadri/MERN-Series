const express=require('express');
const router=express.Router();
const contact_controller=require('../controller/contact-controller');

// router.route('/contact').post(contact_controller)
router.post('/contact',contact_controller)

module.exports=router