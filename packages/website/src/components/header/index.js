import React from 'react';
import * as Logo from '../logo';
import Breadcrumbs from '../breadcrumb';
import CTA from '../calltoaction';

const Header = () => {
  return (
    <div>
      <div className="flex">
        <Logo.White />
        <CTA>Ta kontakt</CTA>
      </div>
      <Breadcrumbs path={['Home', 'Selskapet', 'Ansatte']} />
    </div>
  );
};

export default Header;
