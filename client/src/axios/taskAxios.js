import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

// GET a task |  GET request | read
export const getTasks = () => {
    const response = axios.get(API_URL)
                        .then(res => res.data)
                        .catch(error => error)

    return response
}

// create a task | POST | CREATE
export const createTask = (taskObject) => {
    // send post request to api
    const response = axios.post(API_URL, taskObject)
                        .then(res => res.data)
                        .catch(error => error)


    return response
}

// Update a task | PATCH | Update
export const updateTask = (id, updatedFields) => {
    const response = axios.patch(`${API_URL}/${id}`,updatedFields)
                        .then(res => res.data)
                        .catch(error => error)
                        
    return response
}


// Delete a task | Delete
export const deleteTask = (id) => {
    const response = axios.delete(`${API_URL}/${id}`)
                        .then(res => res.data)
                        .catch(error => error)
    return response
}