import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
})  )
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening to the port ${PORT}`)
    connectDB();
})
