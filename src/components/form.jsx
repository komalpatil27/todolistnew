import React, { Fragment, useState, useEffect } from 'react';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import TaskList from './TaskList'
import _uniqueId from 'lodash/uniqueId';


const Form = () => {

    const [task, setTask] = useState("")
    const [submit, setValue] = useState(false)
    const [taskList, setTaskList] = useState([])
    const [error, setError] = useState("")


    console.log(error, 'Error', task, "task")
    const handleSubmit = (e) => {
        e.preventDefault()
        handValidation(task)
        let tasks = [...taskList, { id: _uniqueId(), description: task }]
        if (!error && task.length) {
            setValue(true)
            setTaskList(tasks)
            setTask("")
        }
    }

    const handleChange = (event, id) => {
        setTask(event.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    const handleDelete = (id) => {
        let toDoTasks = [...taskList]
        let list = toDoTasks.filter((item) => {
            return (
                item.id !== id
            )
        })
        setTaskList(list)
    }

    const handleEdit = (id) => { }

    const handValidation = (task) => {
        console.log(task)
        if (task.length === 0) {
            setError('Please Enter task')
        }
        else {
            setError("")
        }
    }
    return (
        <Fragment>
            <div className='todolist'>
                <div className='todolistheader'>
                    <h4>To Do List</h4>
                </div>
                <div className='formbody'>
                    <div className='form'>
                        <TextField
                            key={task.id}
                            onKeyDown={handleKeyDown}
                            size="small"
                            style={{ paddingBottom: "30px" }}
                            value={task}
                            onChange={(e) => handleChange(e, task.id)}
                            className='text'
                            id="outlined-basic"
                            label={"Add task"}
                            variant="outlined"
                            helperText={error && "Please enter task"}
                        />
                        <Button
                            variant="contained"
                            style={{ marginLeft: "50px", backgroundColor: "#147575" }}
                            onClick={(e) => handleSubmit(e)}>
                            Add
                        </Button>
                    </div>
                </div>
                <TaskList taskList={taskList} submit={submit} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        </Fragment>);
}

export default Form;