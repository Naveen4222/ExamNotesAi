import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ConnectDb } from "./utlis/ConnectDb.js";
import GoogleAuth from "./routes/auth_route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/generateNote_route.js";

const PORT = process.env.PORT || 5002;



const app = express();

app.use(cors(
   { origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST", "PUT", "DELETE", "OPTIONS"]
   } 
));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", GoogleAuth);
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter)


ConnectDb(app.listen(PORT, ()=>{
    console.log("Server is running at ",PORT);
   
}));
