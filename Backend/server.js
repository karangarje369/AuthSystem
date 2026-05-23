import "dotenv/config"
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8","1.1.1.1"])

import { app } from "./src/app.js";
import { Db } from "./config/db.js";

Db()
.then(() => {
    app.listen(3000, () => "Running at port 3000")
})
.catch((error)=>{
    console.error(error)
})