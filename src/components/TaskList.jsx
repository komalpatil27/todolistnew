import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import Checkbox from '@mui/material/Checkbox';

const TaskList = (props) => {

    return (
        <div className='list'>
            {
                props.taskList.length && props.submit ? props.taskList.map((item) => {
                    return (
                        <div className='tasklist' key={item.id}>
                            <span>
                                <Checkbox key={item.id} checked={props.isChecked} onClick={(e) => props.onSelection(e, item.id)} />
                            </span>
                            {item.description}
                            <span className='delete'>
                                <DeleteOutlineIcon onClick={() => props.onDelete(item.id)}
                                    style={{ fill: 'red', paddingRight: '20px', cursor: 'pointer' }}
                                />
                                {/* <ModeEditOutlineTwoToneIcon onClick={() => props.onEdit(item.id)}
                                    style={{ fill: 'blue', paddingRight: '20px' }}
                                /> */}
                            </span>
                        </div>
                    )
                }) :
                    <div className='tasklist' style={{ justifyContent: 'center' }}>
                        <h5>No Records Found</h5>
                    </div>
            }
        </div>);
}

export default TaskList;