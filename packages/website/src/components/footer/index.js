import React from 'react';

// import { Subscribe } from '../subscribe';

export const Footer = ({ org, address, email }) => (
  <footer className="bg-footerblue seven:pt-12 seven:pb-10 seven:px-12 px-6 py-15">
    <div className="mx-auto max-w-1600 text-left flex flex-col seven:flex-row md:items-stretch text-white">
      <div className="tracking-wider mb-10 seven:mb-0">
        <h4 className="text-lg pb-5 font-bold tracking-wider uppercase">
          Kontakt Oss
        </h4>
        <h5 className="text-footer font-bold">ALV AS</h5>
        <p className="text-footer tracking-wider">{org}</p>
        <p className="text-footer tracking-wider">{address}</p>
        <p className="text-footer tracking-wider">{email}</p>
      </div>
      <div className="tracking-wider lg:ml-32 md:ml-15 seven:ml-10 mb-12 seven:mb-0">
        {/* <h4 className="text-lg pb-5 font-bold tracking-wider uppercase">
          Meld deg på nyhetsbrev
        </h4>
        <p className="text-footer max-w-100 pb-5 tracking-wider">{ctaText}</p> */}
        {/* <Subscribe /> */}
      </div>
      <div className="md:ml-auto relative w-20">
        <p className="mt-full seven:absolute bottom-0">
          Alv © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);
