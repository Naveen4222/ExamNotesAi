import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ConnectDb } from "./utlis/ConnectDb.js";
import userRoute from "./routes/user_route.js";
import GoogleAuth from "./routes/auth_route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT || 5002;



const app = express();

app.use(cors(
   { origin:"https://localhost:5173",
    credentials:true,
    methods:["GET","POST", "PUT", "DELETE", "OPTIONS"]
   } 
));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",userRoute);
app.use("/api/auth", GoogleAuth);


ConnectDb(app.listen(PORT, ()=>{
    console.log("Server is running at ",PORT);
   
}));
