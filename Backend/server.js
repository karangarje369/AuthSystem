import "dotenv/config"
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8","1.1.1.1"])
import cors from "cors"
import { app } from "./src/app.js";
import { Db } from "./config/db.js";

Db()
.then(() => {
    app.listen(process.env.PORT, () => "Running at port 3000")
})
.catch((error)=>{
    console.error(error)
})