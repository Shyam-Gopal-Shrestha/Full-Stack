import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { getTasks } from "../axios/taskAxios";
import {Row, Col, ListGroup, Alert} from "react-bootstrap"
import TaskListItem from "./taskListItem";



const TaskContainer = () => {

    const [taskList, setTaskList] = useState([])

    // Fetch data / task from data base
    const fetchTasks = async() => {
        const result = await getTasks()
        console.log("result", result)

        if(result.status === "success"){
            setTaskList(result.data)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const entryTask = taskList.filter(task => task.type === "entry")
    const unwantedTask = taskList.filter(task => task.type === "unwanted")

    return ( 
        <>
        <AddTaskForm fetchTasks={fetchTasks}/>
        
        <Row>
            <Col>
            {/* All Task */}
            <Alert>All Task</Alert>
            <ListGroup>
                {entryTask.map(task => 
                <ListGroup.Item
                    key={task._id}
                    className="d-flex justify-content-between align-items-center">
                    <TaskListItem task={task} fetchTasks={fetchTasks}/>
                </ListGroup.Item>
                )}
            </ListGroup>
            
            </Col>

            <Col>
            {/* Unwanted task */}
            <Alert variant="danger">Unwanted Task</Alert>
            <ListGroup>
                {unwantedTask.map(task => 
                <ListGroup.Item
                    key={task._id}
                    className="d-flex justify-content-between align-items-center">
                    <TaskListItem task={task} fetchTasks={fetchTasks}/>
                </ListGroup.Item>
                )}
            </ListGroup>
            </Col>
        </Row>
        </>
     );
}
 
export default TaskContainer;