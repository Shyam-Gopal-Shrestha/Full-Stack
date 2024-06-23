import { useState } from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import { createTask } from "../axios/taskAxios";

const initialFormData = {
    name: '',
    time: 1,
    difficulty: 'easy',
    priority: 'low'
}
const AddTaskForm = () => {
    const [formData, setFromData] = useState(initialFormData)
    const {name, time, difficulty, priority} = formData
    
// handel on change
    const handleOnChange = (e) => {
        const {name, value} = e.target

        setFromData({
            ...formData,
            [name]: value,
        })
    }

    console.log("formData", formData);

    // handle form submit
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // Create task - call an api to create task in db
        const result = await createTask(formData)
        console.log("result", result);

    }
    return ( 
        <Form onSubmit={handleOnSubmit}>
            <Row>
                <Col>
                {/* Task */}
                    <Form.Group>
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control 
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                        placeholder="Enter the task name" 
                        required
                        />
                    </Form.Group>
                </Col>

                <Col>
                {/* Task Time */}
                    <Form.Group>
                        <Form.Label>Time Taken</Form.Label>
                        <Form.Control 
                        type="number"
                        name="time"
                        placeholder="Enter the time taken"
                        min={1}
                        max={24} 
                        value={time}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* Difficulty */}
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Select name="difficulty" value={difficulty} onChange={handleOnChange}>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </Form.Select>
                </Col>

                <Col>
                    {/* Difficulty */}
                    <Form.Label>Priority</Form.Label>
                    <Form.Select name="priority" value={priority} onChange={handleOnChange}>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </Form.Select>
                </Col>
            </Row>

            <Button variant="primary" type="submit" className="d-block mx-auto my-4">Add Task</Button>
        </Form>
     );
}
 
export default AddTaskForm;