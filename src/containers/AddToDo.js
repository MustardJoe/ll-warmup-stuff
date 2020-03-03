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

/*
const mapStateToProps = (store, props) => {
  return {
    lastToDo: store.todos[store.todos.length - 1]
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadCompositionPage: data => dispatch(loadCompositionPage(data)),
    getAudioTranscriptions: data => dispatch(getAudioTranscriptions(data)),
    getEpisodeSelects: data => dispatch(getEpisodeSelects(data)),
    createNewEpisode: data => dispatch(createNewEpisode(data)),
    createNewSelect: data => dispatch(createNewSelect(data)),
    createNewTranscriptionVersion: data => dispatch(createNewTranscriptionVersion(data))
  }
}*/


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
        input.value = 'hhh'
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo)