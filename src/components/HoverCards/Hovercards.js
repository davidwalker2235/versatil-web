import React, { Component } from "react";
import PropTypes from "prop-types";
import CarouselSlider from "../common/carouselSlider/carouselSlider";
import { HoverCard } from "react-png-hovercard";
import { Translate } from "react-redux-i18n";
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import "./HoverCards.css";

class Hovercard extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    const { openVideo, data } = this.props;
    if (typeof openVideo === "function") {
      openVideo(data.videoKey);
    }
  }

  render() {
    const { data, index } = this.props;
    const {images} = data;
    return (
      <div>
        <HoverCard
          animationSpeed={500}
          borderRadius={0}
          front={
            <div className="front" style={{ width: "inherit" }}>
              <Translate  className="hoverCardTitle" value={`main.hoverCard.hoverCard${index}.titleKey`} />
              <CarouselSlider images={images}/>
            </div>
          }
          back={
            <div className="back">
              <Translate className="hoverCardSubtitle" value={`main.hoverCard.hoverCard${index}.backText`} />
              <Fab variant="extended" onClick={this.openModal}>
                <PlayCircleOutlineIcon className="extendedIcon" />
                <Translate value={`main.hoverCard.play`} />
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
