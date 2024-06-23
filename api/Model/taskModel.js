import TaskSchema from "../schema/taskSchema.js";

// for making quries
// Fetch | read the tasks
export const getTasks = () => {
    return TaskSchema.find()
}

// create a task in db
export const createTask = (taskObj) => {
    return TaskSchema(taskObj).save();
}

// update task in db
export const updateTask = (id, updatedField) => {
    return TaskSchema.findByIdAndUpdate(id, updatedField, { new: true })
}

// Delete a task
export const deleteTask = (id) => {
    return TaskSchema.findByIdAndDelete(id)
}