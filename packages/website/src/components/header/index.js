import React from 'react';
import Link from 'gatsby-link';
import * as Logo from '../logo';
import * as Icon from '../icon';
import Breadcrumbs from '../breadcrumb';
import CTA from '../calltoaction';
import Headroom from 'react-headroom';

export const Header = () => {
  return (
    <div className="bg-navy hidden sm:block sm:pt-7 py-5 px-10">
      <div className="max-w-1600 mx-auto">
        <div className="flex justify-between sm:mb-7 ">
          {/* <div className="flex flex-row-reverse sm:flex-row justify-between mb-7"> */}
          <div className="flex">
            <span className="mr-5">
              <Icon.Dropdown />
            </span>
            <span className="transform ">
              <Logo.White />
            </span>
          </div>
          <div className="text-white flex hidden sm:block">
            <Link to="/kontakt-oss">
              <CTA internalLink="/kontakt-oss">Ta kontakt</CTA>
            </Link>
          </div>
        </div>
        <span className="sm:block hidden">
          <Breadcrumbs path={['Home', 'Selskapet', 'Ansatte']} />
        </span>
      </div>
    </div>
  );
};

export const MobileHeader = () => {
  return (
    <Headroom>
      <div className="bg-navy sm:hidden py-5 px-10">
        <div className="max-w-1600 mx-auto">
          <div className="flex justify-between">
            {/* <div className="flex flex-row-reverse sm:flex-row justify-between mb-7"> */}
            <div className="flex">
              <span className="mr-5">
                <Icon.Dropdown />
              </span>
              <span className="transform ">
                <Logo.White />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
