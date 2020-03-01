import React from 'react';
import ReactDOM, {render } from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import Counter from './components/counter/Counter';

// const render = () => 
ReactDOM.render(
    // <Counter
    // value={store.getState()}
    // onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    // onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    // />,
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
  );

// render();
store.subscribe(render);

