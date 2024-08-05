const mongoose = require("mongoose")

const UpdateSchema = new mongoose.Schema({
    name:{
        type:String,
        maxLength:[30,"the characters cannot exceed 30 characters"],
        required:[true,"the name is required"]
    },
    body:{
        type:String,
        minLength:[20,"very little character entered"],
        require:[true,"the body is required"]
    }
})


module.exports=mongoose.model("Update",UpdateSchema)