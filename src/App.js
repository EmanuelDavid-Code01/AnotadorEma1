import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="notepad">
        <h1>Anotador</h1>
        <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
