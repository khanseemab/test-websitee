import React,{useState} from 'react';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
// import brand from '../../assets/logo.png'




const ControlledCarousel=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (

    <>

    <Carousel className='CarouselMain m-0 p-0' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      
      {/* <img  src={brand} alt="K2 E-Commerce Solutions" height={'150px'}/> */}
        <ExampleCarouselImage  text='heyyyy'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        {/* <img  src={brand} alt="K2 E-Commerce Solutions" height={'150px'}/> */}

      </Carousel.Item>
      <Carousel.Item>
      {/* <img  src={brand} alt="K2 E-Commerce Solutions" height={'150px'}/> */}
        <ExampleCarouselImage text="Third slide" />
        
      </Carousel.Item>
    </Carousel></>
  );
}

export default ControlledCarousel;