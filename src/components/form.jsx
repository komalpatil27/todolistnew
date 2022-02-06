import React, { Fragment, useState, useEffect } from 'react';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import TaskList from './TaskList'
import _uniqueId from 'lodash/uniqueId';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Form = () => {

    const [task, setTask] = useState("")
    const [submit, setValue] = useState(false)
    const [taskList, setTaskList] = useState([])
    const [error, setError] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        handValidation(task)
    }

    const handleChange = (event) => {
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
    // const handleDeleteAll = () => {
    //     let toDoTasks = [...taskList]
    //     let list = toDoTasks.filter((item) => {
    //         return (
    //             item.isChecked == false
    //         )
    //     })
    //     setTaskList(list)
    // }
    const handleEdit = (id) => { }

    const handValidation = (task) => {
        let tasks = [{ id: _uniqueId(), description: task, isChecked }, ...taskList]
        if (task.length === 0) {
            setError('Please Enter task')
        }
        else if (task.length < 6) {
            setError('Enter minimum 6 characters')
        }
        else {
            setError("")
            setValue(true)
            setTaskList(tasks)
            setTask("")
        }
    }

    const handleSelection = (e, id) => {
        setIsChecked(e.target.checked)
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
                            onChange={(e) => handleChange(e)}
                            className='text'
                            id="outlined-basic"
                            label={"Add task"}
                            variant="outlined"
                            helperText={error && error}
                        />
                        <Button
                            variant="contained"
                            style={{ marginLeft: "50px", backgroundColor: "#147575" }}
                            onClick={(e) => handleSubmit(e)}>
                            Add
                        </Button>
                        {/* {isChecked && <DeleteOutlineIcon onClick={() => handleDeleteAll()}
                            style={{ fill: 'red', cursor: 'pointer' }}
                        />} */}
                    </div>
                </div>
                <TaskList taskList={taskList}
                    submit={submit}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onSelection={handleSelection} />
            </div>
        </Fragment>);
}

export default Form;