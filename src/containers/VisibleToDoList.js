import { connect } from 'react-redux';
import { toggleToDo, VisibilityFilters } from '../actions';
import ToDoList from '../components/todos/ToDoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('Error: Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch(toggleToDo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

