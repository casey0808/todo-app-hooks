import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
    {id: 1, task: "Jog", completed: false},
    {id: 2, task: "Clean the room", completed: false},
    {id: 3, task: "Study", completed: true}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}    
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}