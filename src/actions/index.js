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

//Tree Actions
export const TREE_INCREMENT = 'TREE_INCREMENT';
export const TREE_CREATE_NODE = 'TREE_CREATE_NODE';
export const TREE_DELETE_NODE = 'TREE_DELETE_NODE';
export const TREE_ADD_CHILD = 'ADD_CHILD';
export const TREE_REMOVE_CHILD = 'TREE_REMOVE_CHILD';

export const treeIncrement = (nodeId) => ({
  type: TREE_INCREMENT,
  nodeId
});

let nextId = 0;
export const treeCreatNode = () => ({
  type: TREE_CREATE_NODE,
  nodeId: `new_${nextId++}`
});

export const treeDeleteNode = (nodeId) => ({
  type: TREE_DELETE_NODE,
  nodeId
});

export const treeAddNode = (nodeId, childId) => ({
  type: TREE_ADD_CHILD,
  nodeId,
  childId
});

export const treeRemoveChild = (nodeId, childId) => ({
  type: TREE_REMOVE_CHILD,
  nodeId,
  childId
});