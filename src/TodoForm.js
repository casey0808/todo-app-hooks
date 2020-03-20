import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function TodoForm() {
    const [value, handleChange, reset] = useInputState('');
    const dispatch = useContext(DispatchContext);
    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD", task: value})
                reset();
            }}>
                <TextField 
                    onChange={handleChange} 
                    value={value}
                    margin='normal'
                    label='Add New Todo' 
                />
            </form>
        </Paper>
    )
}

export default TodoForm;
