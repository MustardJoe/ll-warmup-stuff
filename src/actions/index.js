// ToDo Actions
let nextTodoId = 0
export const addToDo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleToDo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Counter Actions
export const onIncrement = {
   type: 'INCREMENT' 
}

export const onDecrement = {
  type: 'DECREMENT'
}

export const onReset = {
  type: 'RESET'
}
