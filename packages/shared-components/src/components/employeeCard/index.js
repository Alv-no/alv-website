import React from "react";
import { Shade } from "../icon";
import { GatsbyImage } from "gatsby-plugin-image";

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
  greyCards,
  notransparent,
}) => {
  return (
    <button
      className={`text-white relative group flex cursor-pointer focus:outline-none w-full overflow-hidden ${
        activeBio && id === activeBio.id
          ? "filter-grayscale-0"
          : greyCards && "filter-grayscale"
      } hover:filter-grayscale-0 pb-130c h-0`}
      onClick={handleClick}
      key={id}
      id={id}
      aria-label={firstname}
    >
      <div
        className={`absolute w-full h-full z-10 group-hover:opacity-100 opacity-0 transition duration-300 pointer-events-none ${
          greyCards && "hidden"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(196, 196, 196, 0) 47.26%, #061838 93.68%)",
        }}
      />
      <div
        className={`absolute h-full xs:w-full transform translate-x-4 xs:translate-x-0 w-screen ${
          contrast && "opacity-100"
        } xs:max-w-277px ${
          !notransparent && "opacity-70"
        } group-hover:opacity-100 transition ${
          activeBio && id === activeBio.id ? "opacity-100" : ""
        } group-hover:opacity-100 duration-300 pointer-events-none`}
      >
        <GatsbyImage
          image={(image && image.asset.gatsbyImageData) || fallbackImg}
          alt={firstname}
          className="object-cover h-full xs:w-full"
        />
      </div>
      {experience && (
        <div className="absolute mt-2 z-20 pointer-events-none transform translate-x-4 xs:translate-x-0">
          <Shade />
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
        <div className="text-xl tracking-wider uppercase leading-sm pb-2 font-extralight">
          {lastname}
        </div>
        <div className="text-sm tracking-wider px-2">{title}</div>
      </div>
    </button>
  );
};

export default EmployeeCard;
