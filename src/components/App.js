import React from 'react';
import './App.css';
import MasterToDo from '../components/todos/MasterToDo';
import CounterContainer from '../containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <h1>what up chumps!</h1>
      <CounterContainer />
      <MasterToDo />
    </div>
  );
}

export default App;
