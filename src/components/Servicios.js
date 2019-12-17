import React from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";

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
    return (
      <div style={{ color: "white" }} className="auth-page">
        <Translate value="application.title" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Servicios);
