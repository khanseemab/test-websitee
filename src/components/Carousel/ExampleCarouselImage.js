import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <img
      className="ImageCarousel d-block m-0 p-0" 
      src={'https://picsum.photos/150/120'}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;