const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const helmet = require('helmet')
const connectDB = require('./config/config')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

const app = express();

//configuration
dotenv.config()


//mongodb connection
connectDB()

//middlewares
app.use(express.json())
app.use(helmet());
app.use(morgan("common"))




//listening at port using express server
const port = process.env.PORT || 8800

app.listen(port, ()=>{
    console.log(`Server is running at port no: ${port}`)
})


//routes for api endpoint
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)