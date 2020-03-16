import { createStore } from 'redux';
import reducer from './reducers';
import generateTree from './generateTree';

const tree = generateTree();

export default createStore(
  reducer, tree,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
