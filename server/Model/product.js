const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    category:{
        type:String,
        required:[true,"Please enter the product category"]
    },
    name: {
        type: String,
        required: [true, "Please enter the product name"],
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]  
    },
    image_Url: {
        type: String,
        required: [true, "Please add image duration"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"]
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
    
})


module.exports=mongoose.model("Products",productSchema)