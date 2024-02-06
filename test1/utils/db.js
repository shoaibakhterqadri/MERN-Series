const mongoose=require('mongoose');
const URI='mongodb+srv://mern-series:mern-series@cluster0.lnrfpst.mongodb.net/'

const dbConnect=async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Database connection established");
    } catch (error) {
        console.log("Database is not connected "+error);
    }
}

module.exports=dbConnect