import React, { useState } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, removeTodo}) {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">{todo.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text' 
        className='input' 
        placeholder='add new todo' 
        value={value} 
        onChange={e => setValue (e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about react',
      isCompleted: false
    },
    {
      text: 'Learn about redux',
      isCompleted: false
    },
    {
      text: 'Learn about javascript',
      isCompleted: false
    },
    {
      text: 'Learn about soup',
      isCompleted: false
    },
    {
      text: 'Learn about cats',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo 
          key={index} 
          index={index} 
          todo={todo} 
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
