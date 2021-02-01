import React from 'react';
import * as Button from '../button';
import Link from 'gatsby-link';

export const ServicesCard = ({ title, description, link }) => (
  <div className="h-full bg-white relative">
    <Link to={link}>
      <div className="p-10 bg-white">
        <h4 className="uppercase font-semibold text-lg mb-6px">{title}</h4>
        <div className="w-12 h-3px bg-yellow" />
        <p className="font-light mt-6 mb-10 tracking-normal">{description}</p>
      </div>
    </Link>
    <div className="bottom-0 mb-8 ml-10 w-full absolute">
      <Button.CtaArrow>Lær mer</Button.CtaArrow>
    </div>
  </div>
);

export default ServicesCard;