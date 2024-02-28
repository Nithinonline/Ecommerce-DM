const User = require("../Model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const bcrypt = require("bcrypt");

//Sign Up
const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password || name===' ' || email===' ' || password===' ') {
            return next(new ErrorHandler("All fields required", 400))
        }
        
        const existingUser= await User.findOne({email})
        if(existingUser){
            return next(new ErrorHandler("User Already Exist"))
        }

        const hashPassword = bcrypt.hashSync(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashPassword
        })

        res.status(200).json(user)

    } catch (err) {
        return next(new ErrorHandler(err.message, 500))
    }
}

//Login
const login = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password || email === '' || password === '') {
            return next(new ErrorHandler("Please provide all required fields", 400))
        }

        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("Invalid credentials", 404))
        }

        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return next(new ErrorHandler('Invalid credentials', 400))
        }


        res.status(200).json(user)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}


const updateUserCart=async(req,res,next)=>{
    try {
        const { userId } = req.params
        const user = await User.findById({ _id: userId })
        if (!user) {
            return next(new ErrorHandler("user not found", 404))
        }
        if (user.role == "user") {
            const userCart = await Product.findByIdAndUpdate(req.params.id, {
                $set: {
                    
                    name: req.body.name,
                    email:req.body.email,
                    cart:req.body.cart
                }
            }, {
                new: true,
                runValidators: true,
            })

            console.log(userCart)

            if (!productDetails) {
                return next(new ErrorHandler(`No product with id: ${req.params.id}`, 404))
            }

            res.status(200).json(userCart)
        } else {
            return next(new ErrorHandler("You are not allowed to update product", 400))
        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}



module.exports = { signup, login,updateUserCart }