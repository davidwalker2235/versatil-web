import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";
import { Translate } from "react-redux-i18n";
import CardMedia from '@material-ui/core/CardMedia';
import Styles from "./styles";
import "./QuienesSomos.scss";

class QuienesSomos extends React.Component {

  render() {
    const { classes, quienesSomos } = this.props;
    return (
      <div>
        <div className="servicesBackgroundImage" />
        <div className="blurBackgroundImage" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            className="servicesCardsContainer"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}>
                <h2 className="fancy-title-8 mk-fancy-title mk-animate-element pp-title">
                  <Translate className="pp-color-gradient" value="quienesSomos.title" />
                </h2>
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            lg={8}>
          <Card className={classes.card}>
            <CardActionArea className={classes.mediaRoot}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="span" className={classes.subtitleText}>
                  <Translate value="quienesSomos.text" />
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={quienesSomos.image}
              />
            </CardActionArea>
          </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(QuienesSomos);
