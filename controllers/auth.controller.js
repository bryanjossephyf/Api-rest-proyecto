import { validationResult } from "express-validator"       
import { User } from "../models/users.js";
//
export const login = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body)
    res.send("login OK");
    //
    const {email, password} = req.body
    try {
        let user = new User({email,password});
    } catch (error) {
        
    }

}

export const register = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body)
    res.send("register OK");
}
