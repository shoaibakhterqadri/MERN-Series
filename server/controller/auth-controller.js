const User=require('../models/user-model')


const login= async (req,res)=>{
    try {
        res.status(200).send("Welcome to the Home Page by Routing");     
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res)=>{
try {
    console.log(req.body);
    const {username,email,phone,password}=req.body;

    const userExist=await User.findOne({email});
    if(userExist){
        return res.status(400).json({msg:"User is already exist"});
    }

    const user=await User.create({username,email,phone,password})

    return res.status(200).json({msg:user})
} catch (error) {
    console.log("Register Error "+error);
}
}

module.exports={login,register}