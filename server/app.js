const express =require("express");
const ErrorHandler=require("./middlewares/Error");

const app=express();



app.use(express.json())



//For Error handling
app.use(ErrorHandler)


module.exports=app;