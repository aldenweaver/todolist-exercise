import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
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
                onChange={(e) => {setFormValue({ ...formValue, content: e.target.value })}}></input>
        </form>
    );
}

export default NewTodoForm;