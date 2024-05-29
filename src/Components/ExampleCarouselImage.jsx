// components/ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';
import LinkedInIcon from "../assets/images/img1.png";

function ExampleCarouselImage({ text }) {
  return (
    <div className="example-carousel-image">
      <img
        className="d-block w-100"
        src={LinkedInIcon}
        alt={text}
      />
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
