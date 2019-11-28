import React from "react";
import { connect } from "react-redux";
import backgroundImage from "../../configuration/images/backgroundImage.gif";
import { withRouter } from "react-router-dom";
import "./index.css";

const mapStateToProps = state => ({
  titlePage: state.home.titlePage
});

const mapDispatchToProps = dispatch => ({});

class Home extends React.Component {
  render() {
    const { titlePage } = this.props;
    return (
      <div className="home-page">
        {titlePage}
        <img
          src={backgroundImage}
          alt="background"
          className="backgroundImage"
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
