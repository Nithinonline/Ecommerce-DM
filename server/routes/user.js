const express = require("express");
const { signup, login , updateUserCart}= require("../controllers/user")
const router=express.Router();


router.post("/signup",signup);
router.post("/login",login);
router.patch("/updateCart/:userId",updateUserCart)


module.exports=router;