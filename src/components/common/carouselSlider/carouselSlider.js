import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';
import "./carouselSlider.scss";

class CarouselSlider extends Component {
  render() {
    const {images, animation, fit} = this.props;
    return (
        <Carousel animation={animation} interval={2000}>
            {images.map( (item, index) => (
                <Paper className={fit ? "carousel-paper" : ""} key={index}>
                    <img className={fit ? "carousel-image-fit" : "carousel-image-cover"} src={item.image} alt="versatil-logo" />
                    <p>{item.description || null}</p>
                </Paper>
            ))}
        </Carousel>
    );   
  }
}

CarouselSlider.propTypes = {
    images: PropTypes.array.isRequired,
    animation: PropTypes.string,
    fit: PropTypes.bool
};

export default CarouselSlider;