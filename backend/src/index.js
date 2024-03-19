const express = require("express")
const cors = require("cors")
const route = require("./routes/userRoute")
const dotenv = require("dotenv")
const errorHandler = require("./middlewares/errorHandler")
const connectDb = require("./config/configDb")

dotenv.config()

connectDb()

const PORT  = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/user",route)


app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`app listen on the port ${PORT}`)
})