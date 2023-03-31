import React, { Component } from "react";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HeadsetIcon from '@material-ui/icons/Headset';
import HomeIcon from '@material-ui/icons/Home';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import "./servicios.css";
import Styles from "./styles";
import {NewsHeaderCard} from "react-ui-cards";
import {I18n} from 'react-redux-i18n';

class Servicios extends Component {

  getIcon = (titleKey) => {
    switch (titleKey) {
      case 'alquilerEquipos':
        return <HeadsetIcon className="cardIcon" />
      case 'gruposMusicales':
        return <MusicNoteIcon className="cardIcon" />
      case 'carpas':
        return <HomeIcon className="cardIcon" />
      case 'decoraciones':
        return <EventSeatIcon className="cardIcon" />
      case 'catering':
        return <RestaurantIcon className="cardIcon" />
      case 'gestionEspacios':
        return <HomeWorkIcon className="cardIcon" />
      case 'versatilRecording':
        return <SkipNextIcon className="cardIcon" />
      default:
        return null;
    }
  }

  render() {
    const { services } = this.props;
    return (
      <div>
        <div className="servicesBackgroundImage" ></div>
        <div className="blurBackgroundImage" ></div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="servicesCardsContainer"
        >
          <Grid
            item
            xs={10}
            sm={10}
            lg={10}>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}>
                {services.map((service, index)=> (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    <NewsHeaderCard 
                      href={service.uri}
                      thumbnail={service.image}
                      title={
                          <div>
                            <div className="cardTitleRoot">
                              {this.getIcon(service.titleKey)}
                            </div>
                            <div style={{display: 'block'}}>
                              {I18n.t(`services.serviceCards.${service.titleKey}`)}
                            </div>
                          </div>
                        }
                      className="newsCard" />
                </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );   
  }
}

Servicios.propTypes = {};

export default withStyles(Styles)(Servicios);
