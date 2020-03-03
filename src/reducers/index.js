import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


// the following 9 lines of code are from the Counter excersize
// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

export default combineReducers({
  todos,
  visibilityFilter
});
