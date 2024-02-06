const login=async (req,res)=>{
    try {
        console.log(req.body);
        res.status(200).send({message:req.body})
    } catch (error) {
        
    }
}

const register = (req,res)=>{
    res.status(200).send("This is registration page")
}

module.exports={login,register}