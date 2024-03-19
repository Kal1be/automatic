const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// @desc for register user 
// the route is /api/user/register


const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,phone,password} = req.body
    console.log(req.body)

    if(!username || !email || !phone || !password){
        res.status(400)
        throw new Error("All fields are mandatory !")
    }

    const checkUser =await User.findOne({email})

    if(checkUser){
        res.status(400)

        throw new Error("User with this credential already exist")
    }
    const hashPassword = await bcrypt.hash(password,10)

    const user =new User.create({
        username,
        email,
        phone,
        password:hashPassword
    })

    await user.save()


    if(user){
        const userData = {
            name:user.username,
            email:user.email,
            phone:user.phone
        }

        res.json(userData)
    }

    else{
        res.status(400)
        throw new Error("can not register the user !")
    }
})



const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    console.log(req.body)

    if(!email || !password){
        res.status(400)
        throw new Error("all fields are mandatory !")
    }

    const user = await User.findOne({email})


    if(user && (await bcrypt.compare(password,user.password))){
        const token = jwt.sign({
            username:user.username,
            email:user.email,
            phone:user.phone,
            id:user._id
        },process.env.VERIFY_TOKEN,{expiresIn:"3d"})


        res.json({token})
    }

    else{
        res.status(404)
            throw new Error("email or password is wrong !")
        
    }

    

}) 




const currentUser = asyncHandler(async (req,res)=>{
    const {username,email,phone} = req.user
    const userData = {username,email,phone}

    res.json(userData)

})


module.exports = {registerUser,loginUser,currentUser}