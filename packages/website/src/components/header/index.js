import React from 'react';
import Link from 'gatsby-link';
import * as Logo from '../logo';
import * as Icon from '../icon';
import Breadcrumbs from '../breadcrumb';
import CTA from '../calltoaction';

const Header = () => {
  return (
    <div className="bg-navy pt-7 px-10">
      <div className="max-w-1600 mx-auto">
        <div className="flex justify-between mb-7">
          <div className="flex">
            <span className="mr-5">
              <Icon.Dropdown />
            </span>
            <span className="transform ">
              <Logo.White />
            </span>
          </div>
          <div className="text-white flex">
            <Link to="/kontakt-oss">
              <CTA internalLink="/kontakt-oss">Ta kontakt</CTA>
            </Link>
          </div>
        </div>
        <Breadcrumbs path={['Home', 'Selskapet', 'Ansatte']} />
      </div>
    </div>
  );
};

export default Header;
