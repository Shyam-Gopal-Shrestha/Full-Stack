import express from "express"
import { connectMongo } from "./config/dbConfig.js"
import taskRouter from "./Router/taskRouter.js"
import cors from "cors"
import "dotenv/config"
import path from "path"

const _dirname = path.resolve()

// initialize express app
const app = express()
const PORT = process.env.PORT || 8000
// define cors option
const corsOption = {
    credential: true,
    origin: true,
}

// cors middleware
app.use(cors(corsOption))

// JSON parser middleware
app.use(express.json())



// connect to mongodb | database
connectMongo()

// Routes

// Server side rendering
app.use('/', express.static(path.join(_dirname, 'Frontend')))


// Task Routes
app.use("/api/tasks", taskRouter)



// start server
app.listen(PORT, (error) =>{
    error ? console.log(error) : console.log("your server is running");
})