import React, { Component }  from 'react';
import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Translate } from "react-redux-i18n";
import Fab from '@material-ui/core/Fab';
import Styles from "./styles";
import "./card.scss"

class CardComponent extends Component {

  constructor () {
    super()
    this.openModal = this.openModal.bind(this)
  }

  openModal = () => {
    const { openModalVideo, production } = this.props;
    if (typeof openModalVideo === "function") {
      openModalVideo(production.video);
    }
  }

  render() {
    const { classes, production } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea className={classes.mediaRoot}>
            <CardMedia
              className={classes.media}
              image={production.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
                <Translate value={`produccionesPropias.cards.${production.titleKey}.title`} />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.subtitleText}>
                <Translate value={`produccionesPropias.cards.${production.titleKey}.text`} />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Fab color="secondary" aria-label="edit" onClick={this.openModal}>
              <YouTubeIcon style={{fontSize:"36px"}}/>
            </Fab>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(Styles)(CardComponent);