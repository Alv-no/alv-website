import React from 'react';

export const Metrics : React.FC = () => {
  return (
    <div className="w-full sm:flex leading-tight mx-auto justify-center">
      <div className="grid lg:flex justify-center">
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            60+
          </h2>
          <p>Videoepisoder</p>
        </div>
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            1500+
          </h2>
          <p>Visninger hver uke</p>
        </div>
      </div>
      <div className="grid lg:flex justify-center">
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            2,300
          </h2>
          <p>Følgere på LinkdIn</p>
        </div>
      </div>
    </div>
  );
};
