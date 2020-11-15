import React from 'react';
import * as Icon from '../icon';

export const EmployeeCard = ({
  image,
  id,
  experience,
  firstname,
  lastname,
  title,
  handleClick,
}) => (
  <div
    className="text-white relative group flex cursor-pointer h-90 w-277 sm:w-54 sm:h-70 nine:w-277 nine:h-90 overflow-hidden filter-grayscale hover:filter-grayscale-0 pb-2"
    onClick={handleClick}
    key={id}
    id={id}
  >
    <div className="h-90 w-277 sm:w-54 sm:h-70 nine:w-277 nine:h-100 absolute transition opacity-50 group-hover:opacity-100  duration-300 pointer-events-none">
      <img
        src={image.asset.fluid.src}
        alt={firstname}
        className="object-cover transform translate-y-2 scale-110"
      />
    </div>

    <div className="absolute mt-2 z-10 pointer-events-none">
      <Icon.Shade />
      <div className="z-10 relative transform -translate-y-9 translate-x-2 text-sm flex items-center tracking-wider pt-2px">
        <span className="text-xl font-bold mr-1 pointer-events-none">
          {experience}
        </span>
        års erfaring
      </div>
    </div>
    <div className="text-center mt-auto w-full flex justify-center flex-col leading-base mb-2 z-10 pointer-events-none">
      <div className="text-xl tracking-wider uppercase leading-sm font-bold">
        {firstname}
      </div>
      <div className="text-xl tracking-wider uppercase leading-sm pb-2 font-thin">
        {lastname}
      </div>
      <div className="text-sm tracking-wider px-2">{title}</div>
    </div>
  </div>
);

export default EmployeeCard;
