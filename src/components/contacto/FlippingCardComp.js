import React from "react";
import { withStyles } from "@material-ui/styles";
import { Translate } from "react-redux-i18n";
import {FlippingCard} from "react-ui-cards";
import {FlippingCardBack} from "react-ui-cards";
import {FlippingCardFront} from "react-ui-cards";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Styles from "./styles";

class FlippingCardComp extends React.Component {

  render() {
    const { classes, colorClass } = this.props;
    return (
        <FlippingCard className="flippingCardRoot">
            <FlippingCardBack>
              <div className="backCardRoot">
                <Translate value="contacto.title" />
              </div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className={`frontCardRoot ${colorClass}`}>
                <LocationOnIcon className={classes.icon} />
              </div>
            </FlippingCardFront>
        </FlippingCard>
    );
  }
}

export default withStyles(Styles)(FlippingCardComp);