import React, { useContext } from 'react';
import useInput from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';
import TextField from '@material-ui/core/TextField';


function EditTodoForm({ id, task, toggleIsEditing }) {
    const [value, handleChange, reset] = useInput(task);
    const dispatch = useContext(DispatchContext);
    return (
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({type: "EDIT", id: id, newTask: value})
                    reset();
                    toggleIsEditing();
                }}
                style={{ marginLeft: '1rem', width: '50%'}} 
            >
                <TextField 
                    onChange={handleChange} 
                    value={value}
                    margin='normal'
                    label='Edit Todo' 
                    fullWidth
                    autoFocus
                />
            </form>
    )
}

export default EditTodoForm;
