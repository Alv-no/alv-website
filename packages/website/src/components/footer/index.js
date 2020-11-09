import React from 'react';

export const Footer = ({ ctaText, org, address, email }) => (
  <footer className="bg-darkblue  md:pt-12 md:pb-10 p-15">
    <div className="mx-auto max-w-1320 text-center md:text-left flex flex-col md:flex-row items-center md:items-stretch text-white">
      <div className="text-footer tracking-wider mb-10 md:mb-0">
        <h4 className="text-lg pb-5 font-bold tracking-wider">CONTACT US</h4>
        <h5 className="font-bold">ALV AS</h5>
        <p className="tracking-wider">{org}</p>
        <p className="">{address}</p>
        <p className="">{email}</p>
      </div>
      <div className="tracking-wider lg:ml-32 md:ml-15 sm:ml-10 mb-12 md:mb-0">
        <h4 className="text-lg pb-5 font-bold tracking-wider">
          SUBSCRIBE VIA EMAIL
        </h4>
        <p className="text-footer max-w-100 pb-5 tracking-wider">{ctaText}</p>
        <div className="inline-flex">
          <input
            className="w-50 rounded-full text-sm py-3 px-5 outline-none border border-white bg-darkblue"
            placeholder="Email Address"
          />
          <button className="ml-6 focus:outline-none text-sm tracking-wide font-bold">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="md:ml-auto relative w-20">
        <p className="mt-full md:absolute bottom-0">
          Alv © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {
  org: 'Org.nr: 822 70 4042',
  address: 'Youngstorget 3, 0181 Oslo',
  email: 'hei@alv.no',
  ctaText:
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
};
