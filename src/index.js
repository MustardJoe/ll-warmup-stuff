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
// store.subscribe(render);


/*
import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'

import './index.css'

import AppProviders from './app/common/providers'
import rootReducer from './app/reducers.js'
import { rootSaga } from './app/sagas.js'
import * as serviceWorker from './serviceWorker.js'

import App from './app/app.js'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <AppProviders>
      <App />
    </AppProviders>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
*/
