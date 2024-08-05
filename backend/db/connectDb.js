const mongoose = require("mongoose")


const connectDb = (string)=>{
    return mongoose.connect(string)
}

module.exports=connectDb