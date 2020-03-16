import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { childIds } from '../reducers/tree';

export class Node extends Component {
  handleIncrementClick = () => {
    const { treeIncrement, id } = this.props;
    treeIncrement(id);
  }

  handleAddChildClick = e => {
    e.preventDefault();

    const { treeAddChild, treeCreateNode, id } = this.props;
    const childId = treeCreateNode().nodeId;
    treeAddChild(id, childId);
  }

  handleRemoveClick = e => {
    e.preventDefault();

    const { treeRemoveChild, treeDeleteNode, parentId, id } = this.props;
    treeRemoveChild(parentId, id);
    treeDeleteNode(id);
  }

  treeRenderChild = childId => {
    const { id } = this.props;
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childId } = this.props;
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick}>
          +
        </button>
        {' '}
        {typeof parrentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick}
            style={{ color: 'lightgray', textDecoration: 'none' }}>
              x
            </a>
        }
        <ul>
          {childIds.map(this.treeRenderChild)}
          <li key="add">
            <a href="#"
            onClick={this.handleAddChildClick}>
              Add Child
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node);
export default ConnectedNode;
