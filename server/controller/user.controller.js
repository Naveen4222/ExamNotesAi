import userModel from "../models/user_model.js";

export const getCurrentUser = async(req,res )=>{
    try {
        
        
        const userId = req.userId;
        console.log("req.userId", req.userId);
        console.log("Searching for:", userId);

        const user = await userModel.findById(userId);
        console.log("User found", user);
        if(!user){
            return res.status(400).json({msg:"User is not found"});

        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message:`getCurrentUser error ${error}`});
    }
}