import React from "react";
import { connect } from "react-redux";
// import backgroundImage from "../../configuration/images/backgroundImage.gif";
import { withRouter } from "react-router-dom";
import "./index.css";
import Carousel from "../Carousel";

const mapStateToProps = state => ({
  titlePage: state.home.titlePage
});

const mapDispatchToProps = dispatch => ({});

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <img
          // src={backgroundImage}
          alt="background"
          className="backgroundImage"
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
