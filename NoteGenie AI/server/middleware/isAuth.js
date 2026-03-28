import jwt from "jsonwebtoken";
const isAuth=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        const verifyToken=jwt.verify(token,process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        req.userId=verifyToken.userId;
        next();
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }

}
export default isAuth;