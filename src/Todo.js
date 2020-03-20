import React, { useContext, memo } from 'react';
import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed }) {
    const dispatch  = useContext(DispatchContext);
    const [isEditing, toggleIsEditing] = useToggle(false);
    return (
        <>
            {isEditing ? <EditTodoForm task={task} toggleIsEditing={toggleIsEditing} id={id} /> : 
            <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({type: "TOGGLE", id: id})} />
                <ListItemText style={{ textDecoration: completed? 'line-through':'none' }}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={() => dispatch({type: "REMOVE", id: id})}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggleIsEditing}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>}
        </>
    )
}

export default memo(Todo);
