import React from 'react';
import './custom-styles.css';

const ThirdSection = () => {
  return (
    <section id="third-section" className="bg-white" style={{ paddingTop: '100px'}}>
      <div className="container mx-auto">
        {/* First row: Text on the left, images on the right */}
        <div className="flex flex-col md:flex-row items-center py-8">
          <div className="md:w-1/2 text-left p-4">
            <h2 className="text-4xl font-bold">What we offer?</h2>
            <p className="mt-4 text-lg">
              From the 31 states in Mexico, we offer unforgettable tours 
              in six Mexican states. Every state offers something different from the cenotes all the way to ancient sites. Click on the pictures to see more!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center p-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="/pictures/Yucatan.jpg" alt="Yucatan" className="object-cover h-64 w-full" />
              <img src="/pictures/QRoo.jpg" alt="Quintana Roo" className="object-cover h-64 w-full" />
            </div>
          </div>
        </div>
        
        {/* Second row: Text on the left, images on the right */}
        <div className="flex flex-col md:flex-row items-center py-8">
          <div className="md:w-1/2 flex justify-center p-4 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="/pictures/Chiapas.jpg" alt="Chiapas" className="object-cover h-64 w-full" />
              <img src="/pictures/Oaxaca.jpg" alt="Oaxaca" className="object-cover h-64 w-full" />
            </div>
          </div>
          <div className="md:w-1/2 text-left md:text-right p-4 order-1 md:order-2">
            <h2 className="text-4xl font-bold">More Destinations</h2>
            <p className="mt-4 text-lg">
              Explore more amazing destinations in Mexico. From ancient ruins to beautiful beaches, discover what each state has to offer. Click on the pictures to learn more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;