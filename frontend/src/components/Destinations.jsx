import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './custom-styles.css';

const images = [
  { id: 1, src: '/pictures/Yucatan.jpg', title: 'Title 1' },
  { id: 2, src: '/pictures/Yucatan.jpg', title: 'Title 2' },
  { id: 3, src: '/pictures/Yucatan.jpg', title: 'Title 3' },
  { id: 4, src: '/pictures/Yucatan.jpg', title: 'Title 4' },
  { id: 5, src: '/pictures/Yucatan.jpg', title: 'Title 5' },
  // Add more images as needed
];

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