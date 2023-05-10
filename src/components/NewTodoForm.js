import React, { useState } from 'react';
import { Icon, IconButton } from '@mui/material';
import { RemoveDone } from '@mui/icons-material';

function NewTodoForm({ addTodo, moveAllCompleted }) {
    const [formValue, setFormValue] = useState({
        content: "",
        isDone: false
    });

    function handleSubmit(e) {
        e.preventDefault();

        addTodo(formValue);
        setFormValue({content: "", isDone: false});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={formValue.content} 
                onChange={(e) => {setFormValue({ ...formValue, content: e.target.value })}}>
            </input>
            <IconButton variant="contained" color="primary" onClick={moveAllCompleted}>
                <RemoveDone color="primary">
                </RemoveDone>
            </IconButton>
            
        </form>
    );
}

export default NewTodoForm;