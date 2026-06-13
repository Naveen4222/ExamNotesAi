import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ConnectDb } from "./utlis/ConnectDb.js";
import userRoute from "./routes/user_route.js";


const PORT = process.env.PORT || 5002;



const app = express();
app.use(express.json());
app.use(userRoute);

ConnectDb(app.listen(PORT, ()=>{
    console.log("Server is running at ",PORT);
   
}));
