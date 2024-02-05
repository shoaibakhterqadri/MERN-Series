const mongoose=require('mongoose');
const URI='mongodb+srv://mern-series:mern-series@cluster0.lnrfpst.mongodb.net/'

const connectDb=async ()=>{
    try {
       await  mongoose.connect(URI);
       console.log("Mongoose Connected");
    } catch (error) {
        console.log("Couldn't connect to Mongoose "+error);
    }
}

module.exports = connectDb;