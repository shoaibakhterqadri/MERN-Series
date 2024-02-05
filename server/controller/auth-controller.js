const express=require('express');


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
    res.status(200).send({message:req.body})
} catch (error) {
    
}
}

module.exports={login,register}