import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
// import { Provider } from 'react-redux';
import counter from './reducers/index';
import Counter from './components/counter/Counter';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <Counter
  value={store.getState()}
  onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
  onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root'));

store.subscribe(ReactDOM.render);

