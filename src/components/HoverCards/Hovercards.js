import React, { Component } from "react";
import PropTypes from "prop-types";
import { HoverCard } from "react-png-hovercard";
import { Translate } from "react-redux-i18n";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import "./HoverCards.css";

class Hovercard extends Component {
  render() {
    const { data, index } = this.props;
    const { src } = data;
    return (
      <div>
        <HoverCard
          animationSpeed={500}
          borderRadius={0}
          front={
            <div className="front" style={{ width: "inherit" }}>
              <Translate  className="hoverCardTitle" value={`main.hoverCard.hoverCard${index}.titleKey`} />
              <img
                src={src}
                alt=""
                style={{ objectFit: "cover", width: "inherit" }}
              />
            </div>
          }
          back={
            <div className="back">
              <Translate className="hoverCardSubtitle" value={`main.hoverCard.hoverCard${index}.backText`} />
              <Fab variant="extended">
                <NavigationIcon className="extendedIcon" />
                Navigate
              </Fab>
            </div>
          }
        />
      </div>
    );
  }
}

Hovercard.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
};

export default Hovercard;
