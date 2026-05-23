import mongoose from "mongoose"
let Db = async () => {
    try {
      let connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("Successfull connection")
    } catch (error) {
        console.error("Error connecting DB",error)
        process.exit(1)
    }
}
export {Db}
