import React from 'react';
import { OvalSimple } from '../button';

export const Footer = ({
  org,
  address,
  email,
  phone,
  brandPackageButton,
  companyName,
  contactTitle,
}) => (
  <footer className="bg-theme-footer seven:pt-12 seven:pb-10 seven:px-12 px-6 py-15">
    <div className="mx-auto max-w-1440 text-left flex flex-col justify-between seven:flex-row md:items-stretch text-theme-text">
      <div className="tracking-wider mb-10 seven:mb-0">
        {contactTitle && (
          <h4 className="text-lg pb-5 font-bold tracking-wider uppercase">
            {contactTitle}
          </h4>
        )}
        <h5 className="text-footer font-bold">{companyName} AS</h5>
        <p className="text-footer tracking-wider">{org}</p>
        <p className="text-footer tracking-wider">{address}</p>
        <p className="text-footer tracking-wider">{email}</p>
        <p className="text-footer tracking-wider">{phone}</p>
      </div>
      <div className="flex flex-col sm:items-end justify-between">
        <a href={brandPackageButton?.brandPackage?.asset.url}>
          <OvalSimple variant="normal" color="white" uppercase={false}>
            {brandPackageButton.buttonText}
          </OvalSimple>
        </a>
        <p className="sm:mt-auto bottom-0 sm:text-right mt-2">
          {companyName} © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);
