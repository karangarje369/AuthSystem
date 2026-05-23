import express, { json } from "express"
import Authroute from "../routes/authRoute.js"
let app = express()

app.use(express.json())

app.use("/api/auth",Authroute)
export {app}