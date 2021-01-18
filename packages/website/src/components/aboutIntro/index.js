import React from 'react';
import Image from 'gatsby-image';
import { Title } from '../title';

export const AboutIntro = ({ topImg, bottomImg }) => {
  return (
    <div
      className="max-w-1440 mx-auto lg:grid flex flex-col-reverse gap-x-20 lg:py-15"
      style={{
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <div className="w-full">
        <Image
          fluid={topImg}
          style={{ height: '600px', width: '100%' }}
          className="md:pl-56 lg:pl-0 pl-0"
        />
        <div className="sm:ml-12 lg:ml-30 mx-5 tracking-wider font-light text-xl -mt-40">
          <h2 className="text-white font-semibold uppercase text-4xl w-80 relative z-30">
            Sed ut perspici atis unde omnis iste natusRe
          </h2>
          <p className="mb-8 mt-6 pr-15 w-full pr-10">
            Sed ut perspici atis unde omnis iste natus Excepturi quaerat
            sapiente et omnis cum ut praesentium.
          </p>
          <p className="uppercase font-semibold text-lg mb-7 pr-35 text-about">
            Vår misjon
          </p>
          <p className="mb-15 pr-10">
            Excepturi quaerat sapiente et omnis cum ut praesentium doloremque.
            Velit quas in eum. Tenetur enim aperiam. Lorem ipsum dolor sit
          </p>
        </div>
      </div>
      <div className="font-light flex flex-col justify-between h-full text-xl">
        <div>
          <div className="pr-5 sm:pr-12 md:pl-64 lg:pl-0 sm:pl-12 pl-5">
            <div className="sm:h-auto h-screen w-4/6 sm:mt-20 md:mt-5 lg:mt-0 sm:w-full mx-auto sm:mx-0 sm:block flex justify-center items-center flex-col text-center sm:text-left">
              <Title classes="sm:text-left text-center">Om oss</Title>
              <p className="mb-8 mt-6 sm:pr-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <p className="uppercase font-semibold text-lg mb-7 sm:pr-20 text-about ">
              Vår visjon
            </p>
            <p className="mb-15">
              Sed ut perspici atis unde omnis iste natus Excepturi quaerat
              sapiente et omnis cum ut praesentium doloremque. Velit quas in
              eum. Tenetur enim aperiam. Lorem ipsum dolor sit amet.
            </p>
          </div>

          <Image fluid={bottomImg} className="opacity-70 lg:block hidden " />
        </div>
      </div>
    </div>
  );
};
