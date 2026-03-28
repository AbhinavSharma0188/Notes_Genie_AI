import UserModel from "../models/user.model.js";

export const getCurrentUser=async(req,res)=>{
    try {
        const user=await UserModel.findById(req.userId);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"User found",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}
