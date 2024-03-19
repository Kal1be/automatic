const jwt = require("jsonwebtoken")


const verifyToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"]

    const token = authHeader && authHeader.split(" ")[1]

    if(token==null){
        res.status(401)
        throw new Error("Token invalid")
    }

    jwt.verify(token,process.env.VERIFY_TOKEN,(err,user)=>{
        if(err){
            res.status(403)
            throw new Error("User can not authenticate !")
        }

        req.user = user;
        next()
    })
}


    module.exports = verifyToken