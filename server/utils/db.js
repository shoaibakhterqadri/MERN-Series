const mongoose=require('mongoose');
const URI=process.env.MONGODB_URI

const connectDb=async ()=>{
    try {
       await  mongoose.connect(URI);
       console.log("Mongoose Connected");
    } catch (error) {
        console.log("Couldn't connect to Mongoose "+error);
    }
}

module.exports = connectDb;