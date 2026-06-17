import express, { json } from "express"
import Authroute from "../routes/authRoute.js"
import cors from "cors"
let app = express()
app.use(cors({
  origin: 'https://auth-system-seven-chi.vercel.app', // Replace with your production domain later
  credentials: true // Allow cookies if needed
}));
app.use(express.json())

app.use("/api/auth",Authroute) // any request to this path goes to authRoute
export {app}