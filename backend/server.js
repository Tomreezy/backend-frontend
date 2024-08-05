const express = require("express")
const app = express()
const connectDb = require("./db/connectDb")
const cors = require("cors")
require("dotenv").config()
const updateRoutes = require("./routes/updateRoutes")



//start middleware
app.use(cors())
app.use(express.json())


//routes
app.use("/api/v1/updates",updateRoutes)


//end middleware 



//start server

const port = process.env.PORT || 3000
const start = async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,()=> console.log(`server is up on port ${port}...`))
    }catch(err){
        console.log(err)
    }
}

start()