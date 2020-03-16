import React from 'react';
import './App.css';
import MasterToDo from '../components/todos/MasterToDo';
import CounterContainer from '../containers/CounterContainer';
import Node from '../containers/Node';

function App() {
  return (
    <div className="App">
      <h1>what up chumps!</h1>
      {/* <CounterContainer />
      <MasterToDo /> */}
      <Node id={0} />
    </div>
  );
}

export default App;
