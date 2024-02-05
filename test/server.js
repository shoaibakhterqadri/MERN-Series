const express=require('express');
const app= express();
const router=require('./router/auth-route');

const PORT=5000;

app.use('/auth',router)

app.get('/',(req,res)=>{
    res.status(200).send("This is Home Page");
})

app.get('/register',(req,res)=>{
    res.status(200).send("This is Register Page");
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})