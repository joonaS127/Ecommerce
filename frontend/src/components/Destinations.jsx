import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './custom-styles.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const images = [
  { id: 1, src: '/pictures/Yucatan.jpg', title: 'Yucatan' },
  { id: 2, src: '/pictures/QRoo.jpg', title: 'Quintana Roo' },
  { id: 3, src: '/pictures/Chiapas.jpg', title: 'Chiapas' },
  { id: 4, src: '/pictures/Oaxaca.jpg', title: 'Oaxaca' },
  { id: 5, src: '/pictures/Veracruz.jpg', title: 'Veracruz' },
  // Add more images as needed
];

const CustomLeftArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-arrow-left" onClick={onClick}>
        <IoIosArrowBack size={24} />
      </div>
    );
  };
  
  const CustomRightArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-arrow-right" onClick={onClick}>
        <IoIosArrowForward size={24} />
      </div>
    );
  };

const Destinations = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        autoPlay={true}
        autoPlaySpeed={5000}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-image-wrapper">
            <img src={image.src} alt={image.title} className="carousel-image" />
            <div className="carousel-title-wrapper">
            <h3 className="carousel-title">{image.title}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default Destinations;