import React from 'react';
import Destinations from './Destinations'

const NextSection = () => {
  return (
    <section id="next-section" className="h-screen bg-gray-200" style={{paddingTop: '100px'}}>
      {/* Next section content goes here */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold !text-4xl">Our destinations</h2>
        <p className="mt-4 text-lg !text-lg">This is the content of the next section.</p>
        <div className="pt-16">
        <Destinations />
        </div>
      </div>
    </section>
  );
};

export default NextSection;