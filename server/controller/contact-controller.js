const Contact=require('../models/contact-model')

const contact_controller=async (req,res)=>{
    try {
        const response=req.body;
        await Contact.create(response);
        res.status(200).send("Contact created successfully")
    } catch (error) {
        res.status(400).send("error in Contact");
    }
}

module.exports = contact_controller