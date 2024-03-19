const express = require("express")
const {registerUser, loginUser, currentUser} = require("../controllers/userController")
const verifyToken = require("./verifyToken")
const route = express.Router()

route.post("/register",registerUser)


route.post("/login",loginUser)


route.get("/current",verifyToken,currentUser)

module.exports = route