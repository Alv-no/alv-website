import React from 'react';
import { Cv } from '../icon';

export const EmployeeBio = ({
  videoEmbed,
  bio,
  firstname,
  lastname,
  title,
  id,
}) => (
  <section className="bg-footerblue text-white py-18" id={id}>
    <div className="flex max-w-1200 mx-auto px-5">
      <div className="flex-1 pr-15">
        <div className="h-80 overflow-hidden mb-5">
          <iframe
            className="h-80 w-140 mr-0"
            title={firstname}
            src={videoEmbed}
          />
        </div>
        <div className="flex justify-between text-base tracking-wider">
          <div className="flex cursor-pointer">
            <span className="mr-3">
              <Cv />
            </span>
            <span className="transform -translate-y-2">SE CV</span>
          </div>
          <div className="flex cursor-pointer">
            <div className="w-8 h-2px bg-yellow mr-4 transform translate-y-1" />
            <span className="transform -translate-y-2">GET IN TOUCH</span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-4xl leading-none font-thin mb-4 uppercase tracking-wider">
          <span className="font-bold block">{firstname}</span>
          {lastname}
        </h4>
        <h5 className="text-lg font-thin tracking-wider mb-8">{title}</h5>
        <p className="tracking-wider">{bio}</p>
      </div>
    </div>
  </section>
);
