import { Checkbox, ListItem, ListItemText} from '@mui/material';
import './Todolist.css'
const Todo = (props) => {

    const deleteHandler = () => {
        props.setTodo(props.todos.filter((el) => el.id !== props.todo.id));
    }

    return ( 
        <ListItem sx={{borderStyle: 'solid', borderColor: '#7858A6', marginTop: '0.5rem'}}>
            <Checkbox
                sx={{
                    color: '#7858A6',
                    '&.Mui-checked': {
                        color:'white',
                    },
                }}
                edge='start' size='large'
            />
            <ListItemText primary={props.text} primaryTypographyProps={{ fontSize: '1.1rem', style: { wordWrap: 'break-word' }}}></ListItemText>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </ListItem>
    );
}

export default Todo;