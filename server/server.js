const express=require('express');
const app=express();
const router=require('./router/auth-router')

const PORT=5000;

app.use('/api/auth',router)

app.get('/',(req,res)=>{
    res.status(200).send("Hi, this is a test");
})

app.get('/register',(req,res)=>{
    res.status(200).send("Hi, this is a registration page");
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})