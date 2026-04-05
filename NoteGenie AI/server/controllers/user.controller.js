import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const getCurrentUser=async(req,res)=>{
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(200).json({ success: false, message: "Not logged in", user: null });
        }
        
        let verifyToken;
        try {
            verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(200).json({ success: false, message: "Invalid token", user: null });
        }

        const user = await UserModel.findById(verifyToken.userId);
        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User not found",
                user: null
            });
        }
        return res.status(200).json({
            success: true,
            message: "User found",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}
