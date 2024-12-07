// import React from 'react'; // Can omit in modern react projects
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
// import logo from './logo.svg';
// import './App.css';
import Todo from './models/todo';

function App() {

  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
  ];

  <NewTodo />


  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
