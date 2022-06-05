import React from 'react';
import { TextField } from '@mui/material';
import './Form.css';

const Form = () => {
    return (
        <div className='textdiv'>
            <TextField
                color="grey"
                sx={{ input: { color: 'white' }, width: '30%'}}
                id="standard-basic" label="Enter Item Here" variant="standard"
                className='textfield'
                inputProps={{style: {fontSize: "1.2rem", fontFamily: "sans-serif"}}}
                InputLabelProps={{ className: 'textfield__label', style: {fontSize: "1.2rem", fontFamily: "sans-serif"}}}
                
            />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </div>
    );
}

export default Form;