const express=require("express")
const {addProduct,getAllProducts, getSingleProduct, updateProduct, deleteproduct }=require("../controllers/product")

const router=express.Router()



router.post("/create/:adminId",addProduct)
router.get("/allProducts",getAllProducts);
router.get("/singleProduct/:id",getSingleProduct)
router.patch("/update/:id/:adminId",updateProduct);
router.delete("/delete/:id/:adminId",deleteproduct)


module.exports=router;