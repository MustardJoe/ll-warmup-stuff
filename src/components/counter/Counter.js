import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
  render() {
    const { value, onIncrement, onDecrement, onReset } = this.props;
    return (
      <p>
        <span>Clicked: {value} times </span>
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={onReset}>Reset</button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Counter;
