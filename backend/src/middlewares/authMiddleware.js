import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
// import { AppError } from "./errorHandler.js";

export const protect = async (req, res, next) => {
    let token; // Initialize token variable


    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password"); // Attach user details to request

            next();
        } catch (error){
            res.status(401).json({ status:false, message: "No Authorized" });
        }
    }
    if(!token){
        res.status(401).json({ status:false, message: "No Token Attahced to the Header" });
    }
};



export const authorize = (...roles) => {
    return(req, res, next)=> {
        if (!roles.includes(req.user.role)){
            res.status(403).json({ status:false, message: "You don't have permissions." });
        }
        next();
    };
};
