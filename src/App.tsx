// import React from 'react'; // Can omit in modern react projects
import Todos from './components/Todos';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn TypeScript']}/>
    </div>
  );
}

export default App;
