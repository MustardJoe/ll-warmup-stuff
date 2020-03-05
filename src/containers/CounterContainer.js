import { connect } from 'react-redux';
import { onDecrement, onIncrement, onReset } from '../actions';
import Counter from '../components/counter/Counter';

const mapStateToProps = state => ({
  value: state.counter
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(onIncrement),
  onDecrement: () => dispatch(onDecrement),
  onReset: () => dispatch(onReset)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
