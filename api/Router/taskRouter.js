import express from "express"
import { createTask, getTasks, updateTask, deleteTask } from "../Model/taskModel.js"

// All CRUD routers for task
// Express router
const taskRouter = express.Router()

// GET
taskRouter.get("/", (req, res) => {
    getTasks()
        .then(tasks => {
            res.json({
                status: "success",
                data: tasks,
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                data: error.message || "cannot create the task"
            })
        })
})

// POST | create a task
taskRouter.post("/", (req, res) => {
    // get a task to be created from request
    const task = req.body
    // create the task in database

    // create a task in database
    createTask(task)
        .then((createTask) => {
            res.json({
                status: "success",
                data: createTask
            })
        })
        .catch((error) =>{
            res.json({
                status: "error",
                data: error.message || "cannot create the task"
            })
        })
    })

    // PATCH | Update a task
    taskRouter.patch("/:id", (req, res) => {
        const {id} = req.params
        const updatedFields = req.body

        // Query db data
        updateTask(id, updatedFields)
            .then((updatedTask) => {
                res.json({
                    status: "success",
                    data: updatedTask
                })
            })
            .catch((error) => {
                res.json({
                    status: "error",
                    data: error.message || "cannot create the task"
                })
    })
})

    // Query to delete a task from db
    taskRouter.delete("/:id",(req, res) => {
        const {id} = req.params

        deleteTask(id)
        .then(() => {
            res.json({
                status: "success",
                data: deleteTask
            })
        })
        .catch((error) => {
            res.json({
                status: "error",
                data: error.message || "cannot delete the task"
            })        
    })
})

export default taskRouter