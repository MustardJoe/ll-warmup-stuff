import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter from './counter';
import { childIds, node } from './tree';

export default combineReducers({
  todos,
  counter,
  visibilityFilter,
  childIds,
  node
});
