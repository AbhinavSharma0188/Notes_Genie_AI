import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.listen(PORT,()=>{
    console.log(`Server is listening to the port ${PORT}`)
    connectDB();
})
