import { Button, Stack, Badge } from "react-bootstrap";
import{BsArrowLeft, BsArrowRight, BsTrash} from "react-icons/bs"
import { deleteTask, updateTask } from "../axios/taskAxios";

const TaskListItem = (props) => {

    const {task, fetchTasks} = props

    const handleOnSwitch = async () => {
        // call an api to update the task
        const updatedTaskType = task.type === "entry" ? "unwanted" : "entry"
        const result = await updateTask(task._id, {type: updatedTaskType})
        
        if(result.status === "success"){
            fetchTasks()
        }
    }

    const handleOnDelete = async () => {
        // call an api to delete the task
        const result = await deleteTask(task._id)

        if(result.status === "success"){
            fetchTasks()
        }
    }

    return ( 
        <>
        <Stack gap={2}>
            <strong>{task.name} - {task.name} hrs</strong>
            <Stack direction="horizontal" gap={2}>
                <Badge bg="primary">{task.property}</Badge>
                <Badge bg="info">{task.difficulty}</Badge>
            </Stack>
        </Stack>

        <Stack gap={2} direction="horizontal">
            <Button variant="warning" onClick={handleOnSwitch}>
                {task.type === "entry" && <BsArrowRight />}
                {task.type === "unwanted" && <BsArrowLeft />}
            </Button>
            
            <Button variant="danger" onClick={handleOnDelete}><BsTrash/></Button>
        </Stack>
        </>
     );
}
 
export default TaskListItem;