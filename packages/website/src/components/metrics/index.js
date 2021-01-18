import React from 'react';

export const Metrics = () => {
  return (
    <div className="w-full sm:flex leading-tight mx-auto justify-center">
      <div className="grid lg:flex justify-center">
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            50+
          </h2>
          <p>Ansatte</p>
        </div>
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            15
          </h2>
          <p>Års erfaring</p>
        </div>
      </div>
      <div className="grid lg:flex justify-center">
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            1,000+
          </h2>
          <p>Kundeforhold</p>
        </div>
        <div className="text-center mx-12 mb-3">
          <h2 className="" style={{ fontSize: '70px' }}>
            4
          </h2>
          <p>Kontorer</p>
        </div>
      </div>
    </div>
  );
};
