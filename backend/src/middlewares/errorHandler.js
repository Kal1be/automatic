const {constantes} = require("../constantes")


const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ?res.statusCode :500;

    switch (statusCode) {
        case constantes.FORBIDDEN:
            res.json({title:"Forbidden",message:err.message,stackTrace:err.stack})
            
            break;
        case constantes.NOT_FOUND:
            res.json({title:"Not_found",message:err.message,stackTrace:err.stack})
            break
        case constantes.UNHAUTHORIZED:
            res.json({title:"Unhauthorized",message:err.message,stackTrace:err.stack})
            break
        case constantes.VALIDATION_ERR:  
        res.json({title:"Validation_err",message:err.message,stackTrace:err.stack})
           break
        case constantes.SERVER_ERR:
            res.json({title:"Server_err",message:err.message,stackTrace:err.stack})

         break
        default:
            console.log('no error all good !')
            break;
    }
}


module.exports = errorHandler