import React from 'react';
import * as Button from '../button';
import Image from 'gatsby-image';
import Link from 'gatsby-link';

export const RolesList = ({ image }) => {
  return (
    <>
      <div className="w-full" id="hva-gjør-vi">
        <div
          className="max-w-1440 mx-auto grid py-8 mt-16 gap-x-15"
          style={{ gridTemplateColumns: '30% 30% 30%' }}
        >
          <div>
            <div className="relative" />
            <div className="w-full absolute transform -translate-y-16 translate-x-56">
              <h3
                className="text-4xl leading-tight font-semibold uppercase w-100"
                style={{ lineHeight: '1.05' }}
              >
                Excepteur sint occaecat cupida tat non proident Et assumenda
              </h3>
            </div>
            <Image fluid={image} className="relative h-100 opacity-35" />
          </div>

          <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end">
            <RoleItem>.NET utvikler</RoleItem>
            <RoleItem>Java utvikler</RoleItem>
            <RoleItem>c# utvikler</RoleItem>
            <RoleItem>Agile & Devops</RoleItem>
          </div>
          <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end">
            <RoleItem>Applikasjonsutvikling</RoleItem>
            <RoleItem>WEB utvikler</RoleItem>
            <RoleItem>Teknisk Tester</RoleItem>
          </div>
        </div>
      </div>
    </>
  );
};

export const RoleItem = ({ children, color }) => (
  <Link to="/systemutvikling">
    <div
      className={`flex w-full items-center my-2 h-10 uppercase ${
        color || 'text-navy'
      } text-navy font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow color={color || 'text-navy'} />
    </div>
  </Link>
);
