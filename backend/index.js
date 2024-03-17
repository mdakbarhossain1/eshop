//packages
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// import from folders or file
import connectDB from   "./config/db.js";
    //Routes 
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

const port = process.env.PORT || 5000;


//database connected 
connectDB()

const app = express();
app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Routes 
app.use('/api/users', userRoutes)



// Test Routes For
app.get("/", (req, res)=>{
    res.send("hello")
})


app.listen(port, ()=> console.log(`server running on port : ${port}`))