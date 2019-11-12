import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Color extends Component {
  render() {
    const { color, value } = this.props;
    return (
      <div
        style={{
          width: "200",
          height: "200",
          backgroundColor: value === 0 ? "gray" : color
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.color.color,
    value: state.counter.value
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

Color.propTypes = {
  color: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);
