import mongoose from "mongoose";
 


export const ConnectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONOGODB_URL);
        console.log("Db connected");
    } catch (error) {
        console.log("DB error", error);
    }
}

