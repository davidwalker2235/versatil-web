import React, { Component }  from 'react';
import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import { Translate } from "react-redux-i18n";
import Styles from "./styles";
import CarouselSlider from "../../common/carouselSlider/carouselSlider";
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

  getSocialIcon = (social) => {
    switch (social.type) {
      case 'facebook':
        return <a href={social.url} color="secondary" aria-label="edit" target='_blank'rel="noopener noreferrer" >
                <FacebookIcon fontSize="large" style={{color: "white", fontSize: '50px'}}/>
              </a>
      case 'instagram':
          return <a href={social.url} color="secondary" aria-label="edit" target='_blank'rel="noopener noreferrer" >
                  <InstagramIcon style={{color: "white", fontSize: '50px'}}/>
                </a>
      case 'youtube':
          return <div color="secondary" aria-label="edit" onClick={this.openModal} style={{cursor: 'pointer'}}>
                  <YouTubeIcon style={{color: "white", fontSize: '50px'}}/>
                </div>
      case 'web':
          return <a href={social.url} color="secondary" aria-label="edit" target='_blank'rel="noopener noreferrer" >
                  <LanguageIcon style={{color: "white", fontSize: '50px'}}/>
                </a>
      default:
        break;
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
              title="Contemplative Reptile"
            >
              <CarouselSlider images={production.images || []} fit/>
            </CardMedia>
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
            {production.socialLinks && production.socialLinks.map((socialLink) => this.getSocialIcon(socialLink))}
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(Styles)(CardComponent);