const express =require("express");
const ErrorHandler=require("./middlewares/Error");
const user=require("./routes/user")
const product=require("./routes/product")
const cors=require("cors")
const app=express();



app.use(express.json())
app.use(cors())
app.use("/api/auth",user);
app.use("/api/product",product)


//For Error handling
app.use(ErrorHandler)


module.exports=app;