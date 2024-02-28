const ErrorHandler = require('../utils/ErrorHandler')
const Product = require("../Model/product")
const User = require("../Model/user")

//Product Add
const addProduct = async (req, res, next) => {
    try {
        const { adminId } = req.params
        const user = await User.findById({ _id: adminId })
        if (!user) {
            return next(new ErrorHandler("Admin not found", 404))
        }
        if (user.role == "admin") {

            const { category, name, description, image_Url, price } = req.body;
            if (!category || !name || !description || !image_Url || !price) {
                return next(new ErrorHandler("Please provide all required fields", 400))
            }

            const createProduct = await Product.create({
                category,
                name,
                description,
                image_Url,
                price

            })

            return res.status(200).json(createProduct)
        } else {
            return next(new ErrorHandler("You are not allowed to add product", 400))
        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}

//get All Products List
const getAllProducts = async (req, res, next) => {
    try {
        const Products = await Product.find({})
        res.status(200).json({ Products })
    } catch (err) {
        next(new ErrorHandler("Products not available", 500))
    }
}

//get single Product

const getSingleProduct = async (req, res, next) => {

    try {
        const { id: id } = req.params;
        const product = await Product.findOne({ _id: id });
        if (!product) {
            return next(new ErrorHandler(`No product with id: ${productId}`, 404));
        }
        res.status(200).json({ product });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }

}

//Product Edit
const updateProduct = async (req, res, next) => {
    try {
        const { adminId } = req.params
        const user = await User.findById({ _id: adminId })
        if (!user) {
            return next(new ErrorHandler("Admin not found", 404))
        }
        if (user.role == "admin") {
            const productDetails = await Product.findByIdAndUpdate(req.params.id, {
                $set: {
                    category: req.body.category,
                    name: req.body.name,
                    description: req.body.description,
                    image_Url: req.body.image_Url,
                    price: req.body.price,
                }
            }, {
                new: true,
                runValidators: true,
            })

            if (!productDetails) {
                return next(new ErrorHandler(`No product with id: ${req.params.id}`, 404))
            }

            res.status(200).json(productDetails)
        } else {
            return next(new ErrorHandler("You are not allowed to update product", 400))
        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}


//Product delete
const deleteproduct = async (req, res, next) => {

    try {
        const { adminId } = req.params
        const user = await User.findById({ _id: adminId })
        if (!user) {
            return next(new ErrorHandler("Admin not found", 404))
        }
        if (user.role == "admin") {
            const { id: productId } = req.params;
            const product = await Product.findOneAndDelete({ _id: productId });
            if (!product) {
                return next(new ErrorHandler(`No product with id: ${productId}`, 404));
            }
            res.status(200).json("Product deleted successfully");
        } else {
            return next(new ErrorHandler("You are not allowed to delete product", 400))
        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }


}

//Add Product to cart


module.exports = { addProduct, getAllProducts, getSingleProduct, updateProduct, deleteproduct }




