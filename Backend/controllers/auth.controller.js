import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
export let registerUser = async (req,res) => {
    try {
    let {username,email,password} = req.body

    if(!username || !email || !password){
      return  res.status(400).json({
            "msg":"Fill all fields"
        })
    } 
    const userExists = await User.findOne({
    $or: [
        { username: username },
        { email: email }
    ]
    });

    if(userExists){
       return res.status(400).json({
            "msg":"Username or email already taken"
        })
    }
    const newUser = new User({username,email,password})
    await newUser.save()
    return res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
   
}

export let loginUser = async (req,res) => {
    try {
       let {email,password} = req.body 
        if( !email || !password){
      return  res.status(400).json({
            "msg":"Fill all fields"
        })
    }
        let user = await User.findOne({email})
        if(!user) {
        return res.status(400).json({
            "msg":"Invalid Credentials"
        })  
        }

        let isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
         return res.status(400).json({
            "msg":"Invalid Credentials"
        })     
        }
    
        return res.status(200).json({
            "msg":"Login successfully"
        })
 } catch (error) {
       console.error("Login Error:", error); // Best practice to log it in your console
       return res.status(500).json({ "msg": "Server Error" });
    }
}