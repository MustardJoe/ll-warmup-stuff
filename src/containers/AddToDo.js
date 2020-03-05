import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addToDoMethod: data => dispatch(addToDo(data))
  }
}

const mapStateToProps = (store, props) => {
  return {}
}

const AddToDo = ({ addToDoMethod }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addToDoMethod(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo);
