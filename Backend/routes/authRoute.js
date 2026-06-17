import express from "express"
import { registerUser , loginUser } from "../controllers/auth.controller.js"

const Authroute = express.Router();

//we have created sub route in authroute 
Authroute.post("/register", registerUser)//this is resister route 
Authroute.post("/login" , loginUser)//this is login route 
export default Authroute