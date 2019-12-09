import React, { useState } from "react";
import { connect } from "react-redux";
import backgroundImage from "../../configuration/images/backgroundImage.gif";
import versatilLogo from "../../configuration/images/versatilLogo.png";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
// import Carousel from "../Carousel";

const mapStateToProps = state => ({
  titlePage: state.home.titlePage
});

const mapDispatchToProps = dispatch => ({});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  backgroundLayer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    backgroundColor: "rgba(50,20,105,0.8)"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "40vh",
    boxShadow: "none",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center"
  },
  container: {
    height: "inherit",
    margin: "0"
  },
  versatilLogo: {
    maxWidth: "460px",
    marginTop: "60px",
    marginBottom: "60px"
  }
}));

function Home(props) {
  const classes = useStyles();
  const [count, setCount] = useState("banana");

  return (
    <div className="home-root">
      <img alt="background" className="backgroundImage" />
      <div className={classes.backgroundLayer} />
      <div className={classes.root}>
        <Grid
          container
          spacing={5}
          className={classes.container}
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          sm={12}
          lg={12}
        >
          <Grid item xs={12} sm={12} lg={12}>
            <Paper className={classes.paper}>
              <img
                src={versatilLogo}
                alt="versatil-logo"
                className={classes.versatilLogo}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={2}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
