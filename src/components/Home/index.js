import React, { Component } from "react";
import PropTypes from "prop-types";
import versatilLogo from "../../configuration/images/versatilLogo.png";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import { Translate } from "react-redux-i18n";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Privacy from "../Privacy/Privacy";
import Slide from '@material-ui/core/Slide';
import Styles from "./styles";
import "./index.scss";

class Home extends Component {

  TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  showVideoPromo = () => {
    const { openModalVideo } = this.props;
    if (typeof openModalVideo === 'function') {
      openModalVideo('4yeJ30fKycI');
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="home-root">
        <div className="social-root">
          <a href="http://www.facebook.com/versatilproduccions" target='_blank' rel="noopener noreferrer" >
            <FacebookIcon className="social-icon"/>
          </a>
          <a href="http://www.instagram.com/versatilproduccions" target='_blank' rel="noopener noreferrer" >
            <InstagramIcon className="social-icon"/>
          </a>
          <a href="http://www.youtube.com/channel/UCLkKbPAwTfwwn-p_bkt3jSg" target='_blank' rel="noopener noreferrer" >
            <YouTubeIcon className="social-icon"/>
          </a>
        </div>
        <img alt="" className="backgroundImage" />
        <div className={classes.backgroundLayer} />
        <div className={classes.root}>
          <Grid
            container
            className={classes.container}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} lg={6}>
              <div className={classes.paper}>
                <img
                  src={versatilLogo}
                  alt="versatil-logo"
                  className={classes.versatilLogo}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} className="index-bottons-container">
              <div className={classes.paper}>
                <div className="subtitle">
                  <Button variant="contained" color="secondary" href="/servicios">
                    <Translate className={classes.subtitle} value="main.subtitle" />
                  </Button>
                </div>
                <div className="subtitle">
                  <Button variant="outlined" color="secondary" onClick={this.showVideoPromo}>
                    <Translate className={classes.subtitle} value="main.videoButton" />
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Privacy />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  hoverCards: PropTypes.array
};

export default withStyles(Styles)(Home);
