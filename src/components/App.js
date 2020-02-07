import React from 'react';
import './App.css';
import Counter from './counter/Counter';
import store from '../store';

function App() {
  return (
    <div className="App">
      <h1>what up chumps!</h1>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
    </div>
  );
}

export default App;

