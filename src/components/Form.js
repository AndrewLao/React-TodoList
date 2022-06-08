import React from 'react';
import { TextField } from '@mui/material';
import './Form.css';

const Form = (props) => {

    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        if (props.inputText !== "") {
            props.setTodo([...props.todo, { text: props.inputText, id: props.id }]);
            props.setId(props.id + 1);
            props.setInputText("");
        }
    }

    return (
        <div className='textdiv'>
            <TextField
                value={ props.inputText }
                onChange={ inputTextHandler } 
                sx={{
                    input: { color: 'white' }, width: '30%', '& .MuiInput-underline:before': { borderBottomColor: '#7858A6' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'black' }
                }}
                id="standard-basic" label="Enter Item Here" variant="standard"
                className='textfield'
                inputProps={{style: {fontSize: "1.2rem", fontFamily: "sans-serif"}}}
                InputLabelProps={{ className: 'textfield__label', style: {fontSize: "1.2rem", fontFamily: "sans-serif"}}}
                
            />
            <button
                onClick={submitHandler}
                className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </div>
    );
}

export default Form;