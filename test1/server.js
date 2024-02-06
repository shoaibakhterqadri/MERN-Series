const express=require('express');
const app= express();
const router=require('./router/auth-router')
const dbConnect=require('./utils/db')

const PORT=5000;

app.use(express.json())
app.use('/auth',router);

app.get('/',(req,res)=>{
res.status(200).send("This is home page")
})

dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`The Server is listening at ${PORT}`);
    })
})
