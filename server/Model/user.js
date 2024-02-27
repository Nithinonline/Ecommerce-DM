const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide username"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"]
    },
    password: {
        type: String,
        required: [true, "Please provide Password"]

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    cart:{
        type:Array,
        default:[]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("User", userSchema);