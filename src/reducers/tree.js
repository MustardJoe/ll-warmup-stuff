import { 
  TREE_INCREMENT,
  TREE_ADD_CHILD,
  TREE_REMOVE_CHILD,
  TREE_CREATE_NODE,
  TREE_DELETE_NODE
} from '../actions/index';

export const childIds = (state, action) => {
  switch (action.type) {
    case TREE_ADD_CHILD:
      return [ ...state, action.childId ];
    case TREE_REMOVE_CHILD:
      return state.filter(id => id !== action.childId);
    default:
      return state;
  }
}

export const node = (state, action) => {
  switch (action.type) {
    case TREE_CREATE_NODE:
      return {
        id: action.nodeId,
        counter: 0,
        childIds: [],
      }
    case TREE_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case TREE_ADD_CHILD:
    case TREE_REMOVE_CHILD:
      return {
        ...state, childIds: childIds(state.childIds, action)
      }
    default: return state
  }
}

export const getAllDescendantIds = (state, nodeId) => (
  state[nodeId].childIds.reduce((acc, childId) => (
    [ ...acc, childId, ...getAllDescendantIds(state, childId) ]
  ), [])
)

export const deleteMany = (state, ids) => {
  state = { ...state };
  ids.forEach(id => delete state[id]);
  return state;
}

export default (state = {}, action) => {
  const { nodeId } = action;
  if(typeof nodeId === 'undefined') {
    return state;
  }

  if(action.type === TREE_DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId)
    return deleteMany(state, [ nodeId, ...descendantIds ])
  }
  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}
