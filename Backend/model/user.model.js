import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema(
    {
       username:{
            type:String,
            required:[true,"username is required"],// defining it with error handling
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:[true,"password is required"],// defining it with error handling
        }
    },
    {timestamps:true}
)

// using pre save hook to handle password
userSchema.pre("save",async function  () {
    if(!this.isModified("password")) {
        return
    }
    
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        
    } catch (error) {
        throw error
    }

}
)
// generating jwt
userSchema.methods.generateJWT = function () {
    
    const payload = { id: this._id };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d", 
    });
}

export const User = mongoose.model("User",userSchema)