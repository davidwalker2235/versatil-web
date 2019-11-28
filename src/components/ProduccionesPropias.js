import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class Register extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className="auth-page">Producciones propias page</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
