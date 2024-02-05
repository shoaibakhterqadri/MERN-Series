const express=require('express');


const login= async (req,res)=>{
    try {
        res.status(200).send("Welcome to the Home Page by Routing");     
    } catch (error) {
        console.log(error);
    }
}

module.exports={login}