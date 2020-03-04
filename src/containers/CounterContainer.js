import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../actions';
import Counter from '../components/counter/Counter';

const mapStateToProps = state => ({
  value: state.counter
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(onIncrement),
  onDecrement: () => dispatch(onDecrement)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);