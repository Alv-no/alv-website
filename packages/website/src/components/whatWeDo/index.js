import React from 'react';
import { Title } from '../title';
import img1 from '../../assets/what_we_do_icon_start.svg';
import img2 from '../../assets/what_we_do_icon_box.svg';
import img3 from '../../assets/what_we_do_icon_dartboard.svg';
import img4 from '../../assets/what_we_do_icon_screen.svg';
import img5 from '../../assets/what_we_do_icon_document.svg';
import img6 from '../../assets/what_we_do_icon_search.svg';

export const WhatWeDo = () => {
  return (
    <>
      <div className="w-full" id="hva-gjør-vi">
        <div
          className="max-w-1200 mx-auto py-8"
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          <div className="mb-15">
            <Title underline align="text-left" color="text-navy">
              Hva gjør vi
            </Title>
          </div>
          <div className="ml-15 flex">
            <div>
              <Service image={img1}>
                Dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
                tempor incididunt ut labore et dolore roipi magna.
              </Service>
              <Service image={img2}>
                Consectetur adipisifwcing elit, sed do eiusmod tempor incididunt
                ut labore et dolore roipi magna.
              </Service>
              <Service image={img3}>
                Dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
                tempor incididunt ut labore.
              </Service>
            </div>
            <div className="ml-16">
              <Service image={img4}>
                Amet, consectetur adipisifwcing elit, sed do eiusmod tempor
                incididunt ut labore et dolore roipi magna.
              </Service>
              <Service image={img5}>
                Dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
                tempor incididunt ut labore et dolore roipi.
              </Service>
              <Service image={img6}>
                Cnsectetur adipisifwcing elit, sed do eiusmod tempor incididunt
                ut labore et dolore roipi.
              </Service>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Service = ({ image, children }) => (
  <div className="flex items-center mb-10">
    <img src={image} alt="service" className="h-20 mr-10" />
    <p className=" max-w-90">{children}</p>
  </div>
);
