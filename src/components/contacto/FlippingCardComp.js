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
import Styles from "./styles";
import "./Contacto.scss";

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
  
  getText = (text, icon) => {
    switch (icon) {
      case "direccion":
        return text
      case "telefono":
        return (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {text.map((elem, index) => {
              debugger;
              return (
              <div key={index}>
                <Translate value={`contacto.${elem.textKey}`} />
                <div>{elem.value}</div>
              </div>
            )})}
          </div>
        );
      case "email":
        return (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {text.map((elem, index) => {
              debugger;
              return (
              <div key={index}>
            <a href={`mailto:${elem.value}`}>{elem.textKey}</a>
              </div>
            )})}
          </div>
        );
      case "media":
        return text
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