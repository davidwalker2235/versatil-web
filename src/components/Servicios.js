import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  titlePage: state.servicios.titlePage
});

const mapDispatchToProps = dispatch => ({});

class Servicios extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { titlePage } = this.props;
    return <div style={{color: 'white'}} className="auth-page">{titlePage}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Servicios);
