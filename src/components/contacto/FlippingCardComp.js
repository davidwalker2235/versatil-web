import React from "react";
import { withStyles } from "@material-ui/styles";
import {FlippingCard} from "react-ui-cards";
import {FlippingCardBack} from "react-ui-cards";
import {FlippingCardFront} from "react-ui-cards";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GroupIcon from '@material-ui/icons/Group';
import { Translate } from "react-redux-i18n";
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Styles from "./styles";
import "./Contacto.css";

class FlippingCardComp extends React.Component {

  getIcon = (icon) => {
    const { classes } = this.props;

    switch (icon) {
      case "direccion":
        return <LocationOnIcon className={classes.icon} />
      case "telefono":
        return <PhoneIcon className={classes.icon} />
      case "email":
        return <MailIcon className={classes.icon} />
      case "media":
        return <GroupIcon className={classes.icon} />
      default:
        break;
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
      default:
        break;
    }
  }
  
  getText = (text, icon) => {
    switch (icon) {
      case "direccion":
        return text
      case "telefono":
        return (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {text.map((elem, index) => {
              return (
              <div key={index}>
                <Translate style={{textDecoration: 'underline'}} value={`contacto.${elem.textKey}`} />
                <div>{elem.value}</div>
              </div>
            )})}
          </div>
        );
      case "email":
        return (
          <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            {text.map((elem, index) => {
              return (
              <div key={index}>
            <a href={`mailto:${elem.value}`}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <EmailIcon style={{fontSize: '50px', color: 'white', paddingRight: '10px'}}/>
                <Translate style={{textDecoration: 'underline'}} value={`contacto.${elem.textKey}`} />
              </div>
            </a>
              </div>
            )})}
          </div>
        );
      case "media":
        return (
          <div className="social-services-root">
            {
              text.map((social) => (
                <a href={social.url} target='_blank' rel="noopener noreferrer" >
                  {this.getSocialIcon(social)}
                </a>
              ))
            }
          </div>
        )
      default:
        return null
    }
  }
  render() {
    const { colorClass, icon, text } = this.props;
    return (
        <FlippingCard className="flippingCardRoot">
            <FlippingCardBack>
              <div className="backCardRoot">
                {this.getText(text, icon)}
              </div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className={`frontCardRoot ${colorClass}`}>
                {this.getIcon(icon)}
              </div>
            </FlippingCardFront>
        </FlippingCard>
    );
  }
}

export default withStyles(Styles)(FlippingCardComp);