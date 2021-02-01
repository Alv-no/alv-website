import React from 'react';
import * as Icon from '../icon';
import Image from 'gatsby-image';

export const EmployeeCard = ({
  image,
  id,
  experience,
  firstname,
  lastname,
  title,
  handleClick,
  activeBio,
  contrast,
  fallbackImg,
}) => (
  <div
    className={`text-white relative group flex cursor-pointer overflow-hidden ${
      activeBio && id === activeBio.id
        ? 'filter-grayscale-0'
        : 'filter-grayscale'
    } hover:filter-grayscale-0 pb-130c h-0`}
    onClick={handleClick}
    key={id}
    id={id}
  >
    <div
      className={`absolute h-full xs:w-full transform translate-x-4 xs:translate-x-0 w-screen ${
        contrast && 'opacity-100'
      } xs:max-w-277px opacity-65 group-hover:opacity-100 transition ${
        activeBio && id === activeBio.id ? 'opacity-100' : ''
      } group-hover:opacity-100 duration-300 pointer-events-none`}
    >
      <Image
        fluid={(image && image.asset.fluid) || fallbackImg}
        alt={firstname}
        className="object-cover h-full xs:w-full"
        style={{ backgroundColor: 'rgba(40,40,40,50%)' }}
      />
    </div>
    {experience && (
      <div className="absolute mt-2 z-10 pointer-events-none transform translate-x-4 xs:translate-x-0">
        <Icon.Shade />
        <div className="z-10 relative transform -translate-y-9 translate-x-2 text-sm flex items-center tracking-wider pt-2px">
          <span className="text-xl font-bold mr-1 pointer-events-none">
            {experience}
          </span>
          års erfaring
        </div>
      </div>
    )}
    <div className="absolute bottom-0 mb-4 text-center mt-auto w-full flex justify-center flex-col leading-base mb-2 z-10 pointer-events-none">
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
