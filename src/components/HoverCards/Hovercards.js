import React, { Component } from "react";
import PropTypes from "prop-types";
import { HoverCard } from "react-png-hovercard";
import { Translate } from "react-redux-i18n";
import "./HoverCards.css";

class Hovercard extends Component {
  render() {
    const { data, index } = this.props;
    const { src } = data;
    return (
      <div>
        <HoverCard
          animationSpeed={500}
          margin={10}
          borderRadius={0}
          front={
            <div className="front" style={{ width: "inherit" }}>
              <img
                src={src}
                alt=""
                style={{ objectFit: "cover", width: "inherit" }}
              />
            </div>
          }
          back={
            <div className="back">
              <Translate value={`main.hoverCard.hoverCard${index}.backText`} />
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
