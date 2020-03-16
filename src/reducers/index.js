import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter from './counter';
import { treeReducers } from './tree';

export default combineReducers({
  todos,
  counter,
  visibilityFilter,
  treeReducers
});
