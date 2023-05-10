import React, { useState } from 'react';

import './App.css';
import NewTodoForm from './components/NewTodoForm';
import Todo from './components/Todo';

function App() {
  // useState() on App level to contain the Todos state
  const[todos, setTodos] = useState([]);

  function addTodo(newItem) {
    setTodos([newItem, ...todos]);
  }

  function markComplete(index) {
    todos[index].isDone = !todos[index].isDone;

    // Modifying one member of the array, so need to update array via useState/set
    setTodos([...todos]);
  }

  function deleteOne(index){
    // Start at given index & only delete one item
    todos.splice(index, 1);

    setTodos([...todos]);
  }

  return (
    <div className="App">
      <h1>Just Do ✅</h1>
      <br/>

      {/* ToDos */}
      <div>
        {todos.map((todo, index) => {
            return <Todo key={index} todo={todo} index={index} markComplete={markComplete} deleteOne={deleteOne}></Todo>
        })}
      </div>

      <br/>

      {/* Not running the function, passing definition to form, so don't need parens/params */}
      <NewTodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
