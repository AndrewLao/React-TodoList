import React from 'react';
import { List } from '@mui/material';
import Todo from './Todo';
import './Todolist.css'

const Todolist = (props) => {

    return (
        <div className="todoList">
            <List
            sx={{ width: '50%'}}>
                {props.todo.map(todo => (
                    <Todo text={todo.text} key={todo.id} setTodo={props.setTodo} todos={props.todo} todo={todo}/>
                ))}
            </List>
        </div>
    );
};


export default Todolist;