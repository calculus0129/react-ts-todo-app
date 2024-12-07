// import React from 'react'; // Can omit in modern react projects
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
// import './App.css';
import Todo from './models/todo';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript'),
  // ];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
