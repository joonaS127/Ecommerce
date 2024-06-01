import React from 'react';
import Destinations from './Destinations'

const NextSection = () => {
  return (
    <section id="next-section" className="h-screen bg-gray-200" style={{paddingTop: '100px'}}>
      {/* Next section content goes here */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold !text-4xl">Our destinations</h2>
        <p className="mt-4 text-lg !text-lg">From the 31 states in Mexico, we offer unforgettable tours 
        in six Mexican states. Every state offers something different from the cenotes all the way to ancient sites. Click on the pictures to see more!</p>
        <div className="pt-16">
        <Destinations />
        </div>
      </div>
    </section>
  );
};

export default NextSection;