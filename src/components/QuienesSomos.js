import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className="editor-page">Quienes somos page</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
