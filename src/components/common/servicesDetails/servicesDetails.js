import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import CarouselSlider from "../carouselSlider/carouselSlider";
import Button from '@material-ui/core/Button';
import "./servicesDetails.css";
import Styles from "./styles";
import ReactPlayer from 'react-player';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import soundCloudIcon from '../../../configuration/images/soundCloudIcon.png';

class ServicesDetails extends Component {

  openDialog = () => {
    const {openDialog} = this.props;
    if (typeof openDialog === 'function') openDialog()
  }

  getCatalogo = (data) => {
    const {languaje} = this.props;
    switch (languaje) {
      case 'es':
        return data.catalogoUries
      case 'ca':
        return data.catalogoUricat
      default:
        return null;
    }
  }

  getSocialIcon = (social) => {
    switch (social.type) {
      case 'facebook':
        return <FacebookIcon style={{marginRight: '15px'}} className="social-icon"/>;
      case 'instagram':
        return <InstagramIcon style={{marginRight: '15px'}} className="social-icon"/>;
      case 'youtube':
        return <YouTubeIcon style={{marginRight: '15px'}} className="social-icon"/>;
      case 'web':
        return <LanguageIcon style={{marginRight: '15px'}} className="social-icon"/>;
      default:
        break;
    }
  }

  getVersatilRecordingText = () => (
    <div className="recording-text-root" >
      <Translate className="section-title" value="services.text.versatilRecording.estudioGrabacionTitle" />
      <Translate className="service-text" value="services.text.versatilRecording.estudioGrabacionText1" />
      <br />
      <Translate className="service-text" value="services.text.versatilRecording.estudioGrabacionText2" />
      <br />
      <Translate className="section-title" value="services.text.versatilRecording.personalTitle" />
      <Translate className="service-text" value="services.text.versatilRecording.personalText" />
      <br />
      <Translate className="section-title" value="services.text.versatilRecording.trabajosRealizadosTitle" />
      <Translate style={{textDecoration: 'underline'}} className="service-text" value="services.text.versatilRecording.gruposRegistradosTitle" />
      <Translate className="service-text" value="services.text.versatilRecording.gruposRegistradosText" />
      <br />
      <Translate style={{textDecoration: 'underline'}} className="service-text" value="services.text.versatilRecording.postProduccionTitle" />
      <Translate className="service-text" value="services.text.versatilRecording.postProduccionText" />
      <br />
      <Translate style={{textDecoration: 'underline'}} className="service-text" value="services.text.versatilRecording.bandasSonorasTitle" />
      <Translate className="service-text" value="services.text.versatilRecording.bandasSonorasText" />
      <br />
    </div>
  )

  render() {
    const {classes, serviceData} = this.props;
    return (
      <div>
        <div className="servicesBackgroundImage" ></div>
        <div className="blurBackgroundImage" ></div>
        <Grid
          container
          className={classes.container}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid>
            <h2 className="fancy-title-8 mk-fancy-title mk-animate-element">
              <Translate className="color-gradient" value={`services.serviceCards.${serviceData.title}`} />
            </h2>
          </Grid>
          {serviceData && serviceData.dataAry && serviceData.dataAry.map((data, index) => (
            <Grid
            key={index}
            container
            className={classes.container}
            direction="row"
            spacing={3}
          >
            <Grid item lg={6} sm={6} xs={12}>
              <Grid item lg={12}>
                <CarouselSlider fit={true} images={data.images || []}/>
              </Grid >
              {data.hasVideo && <Grid className={classes.serviceVideo} item lg={12}>
                <ReactPlayer url={data.videoUri} />
              </Grid>}
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Grid container>
              < Grid item lg={12} sm={12} xs={12}>
                  <div className="section-title">
                    {data.title? <Translate value={`services.text.${data.title}`} /> : null}
                  </div>
                  {}
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                  {data.isVersatilStudio ? 
                    this.getVersatilRecordingText() :
                    <Translate className="service-text" value={`services.text.${serviceData.title}${serviceData.dataAry.length > 1 ? `${index + 1}` : ''}`} />}
                </Grid>
                {data.isVersatilStudio && <div>
                  <Translate className="service-text" value="services.text.soundCloudText" />
                  <a href="https://soundcloud.com/user-888069420-951487892/tracks" target='_blank' rel="noopener noreferrer" >
                    <img
                      src={soundCloudIcon}
                      alt="soundCloud-logo"
                      className={classes.soundCloudLogo}
                    />
                  </a>
                </div>}
                {data.hasSocialLinks && <Grid item lg={12} sm={12} xs={12}>
                  <div className="social-services-root">
                    {
                      data.socialLinks.map((social) => (
                        <a href={social.url} target='_blank' rel="noopener noreferrer" >
                          {this.getSocialIcon(social)}
                        </a>
                      ))
                    }
                  </div>
                </Grid>}
                <Grid container>
                  <Grid item lg={5} xs={12} sm={10} className={classes.buttonContainer}>
                    <div className="button-container">
                      {
                        data &&
                        data.hasPresupuesto &&
                        <Button onClick={this.openDialog} size="large" variant="contained" color="secondary">
                          <Translate className="service-button-text" value={`services.${data.presupuestoButtonTitle}`} />
                        </Button>
                      }
                      {
                        data &&
                        data.hasCatalogo &&
                        <Button size="large" variant="outlined" color="secondary" href={this.getCatalogo(data)} target="_blank">
                          <Translate className="service-button-text" value={`services.${data.catalogoButtonTitle}`} />
                        </Button>
                      }
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          ))}
        </Grid>
      </div>
    );   
  }
}

export default withStyles(Styles)(ServicesDetails);
