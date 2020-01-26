import React from "react";
import { withStyles } from "@material-ui/styles";
import {FlippingCard} from "react-ui-cards";
import {FlippingCardBack} from "react-ui-cards";
import {FlippingCardFront} from "react-ui-cards";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GroupIcon from '@material-ui/icons/Group';
import Styles from "./styles";

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
  
  getText = (text) => {
    if (typeof text === 'string') return text
    return null; 
  }
  render() {
    const { colorClass, icon, text } = this.props;
    return (
        <FlippingCard className="flippingCardRoot">
            <FlippingCardBack>
              <div className="backCardRoot">
                {this.getText(text)}
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