import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export let registerUser = async (req,res) => {
    try {
    let {username,email,password} = req.body  // destructuring incoming data

    if(!username || !email || !password){  // checking is required fields are not empty 
      return  res.status(400).json({
            "msg":"Fill all fields"
        })
    } 
    const userExists = await User.findOne({  //  checking if user already exists
    $or: [
        { username: username },
        { email: email }
    ]
    });

    if(userExists){  // if exists then giving 400 bad request 
       return res.status(400).json({
            "msg":"Username or email already taken"
        })
    }
    const newUser = new User({username,email,password}) //if every check is pass then we create a new user object  with our user model 
    // remember when we interact with DB use await
    await newUser.save() // saving our user  
    return res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
   
}

//Login routes handler
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
        const token = user.generateJWT()
        return res.status(200).json({
            "token":token,
            "msg":"Login successfully"
        })

 } catch (error) {
       console.error("Login Error:", error); // Best practice to log it in your console
       return res.status(500).json({ "msg": "Server Error" });
    }
}