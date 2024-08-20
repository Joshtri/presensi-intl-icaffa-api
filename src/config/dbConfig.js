import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.APP_MONGODB_URI,{
            
        });

        console.log(`database connected. ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}


export default connectDB;