import express from "express"
import { registerUser , loginUser } from "../controllers/auth.controller.js"

const Authroute = express.Router();

Authroute.post("/register", registerUser)
Authroute.post("/login" , loginUser)
export default Authroute