import React from "react";
import { withStyles } from "@material-ui/styles";
import { Translate } from "react-redux-i18n";
import {FlippingCard} from "react-ui-cards";
import {FlippingCardBack} from "react-ui-cards";
import {FlippingCardFront} from "react-ui-cards";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
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
        return <InstagramIcon className={classes.icon} />
      default:
        break;
    }
  }

  render() {
    const { colorClass, icon } = this.props;
    return (
        <FlippingCard className="flippingCardRoot">
            <FlippingCardBack>
              <div className="backCardRoot">
                <Translate value="contacto.title" />
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