import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { incrementAsync, decrementAsync } from "../actions/counterAsync";

class Counter extends Component {
  render() {
    const { increment, decrement, value, incAsync, decAsync } = this.props;
    return (
      <div>
        <span>Value: {value}</span>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        <div>
          <button onClick={incAsync}>Increment async</button>
          <button onClick={decAsync}>Decrement async</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.counter.value
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment: increment,
      decrement: decrement,
      incAsync: incrementAsync,
      decAsync: decrementAsync
    },
    dispatch
  );
}

Counter.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  counter: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
