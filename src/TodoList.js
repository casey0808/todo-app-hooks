import React, { useContext } from 'react';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';



export default function TodoList() {
    const todos = useContext(TodosContext);
    if(todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <ListItem style={{ height: '64px' }} key={todo.id}>
                            <Todo id={todo.id} task={todo.task} completed={todo.completed} />
                            {i < (todos.length - 1) && <Divider />}
                        </ListItem>
                    ))}
                </List>
            </Paper>
        )
    }
    return null;
}
