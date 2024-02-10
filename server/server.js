require('dotenv').config()
const express=require('express');
const app=express();
const authRouter=require('./router/auth-router')
const contactRouter=require('./router/contact-router')
const connectDb=require('./utils/db');
const PORT=process.env.PORT || 4000

app.use(express.json());

app.use('/api/auth',authRouter)
app.use('/api/form',contactRouter)

app.get('/',(req,res)=>{
    res.status(200).send("Hi, this is a test");
})

app.get('/register',(req,res)=>{
    res.status(200).send("Hi, this is a registration page");
})
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
})
