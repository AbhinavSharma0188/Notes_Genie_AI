import UserModel from "../models/user.model.js";

export const googleAuth=async(req,res)=>{
    try {
        const {name,email}=req.body;
        let user=await UserModel.findOne({email});
        if(!user){
            user=new UserModel({
                name,
                email,
               
            })
        }
         let token=getToken(user._id)
         res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
         })
         return res.status(200).json({
            success:true,
            message:"User logged in successfully",
            user,
            token
         })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}