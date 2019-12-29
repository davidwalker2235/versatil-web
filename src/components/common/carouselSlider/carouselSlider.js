import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';
import "./carouselSlider.scss";

class CarouselSlider extends Component {
  render() {
    const {images} = this.props;
    return (
        <Carousel animation="slide">
            {images.map( (item, index) => (
                <Paper key={index}>
                    <img style={{backgroundSize: "cover", width: "100%"}} src={item.image} alt="versatil-logo" />
                    <p>{item.description || null}</p>
                </Paper>
            ))}
        </Carousel>
    );   
  }
}

CarouselSlider.propTypes = {
    images: PropTypes.array
};

export default CarouselSlider;