import React from 'react';
import * as Button from '../button';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image-es5';

export const RolesList = ({ image }) => {
  return (
    <>
      <div className="w-full" id="hva-gjør-vi">
        <div
          className="max-w-1440 mx-auto sm:grid py-8 lg:gap-x-15 sm:gap-x-0 justify-between sm:pr-12"
          style={{ gridTemplateColumns: '30% 30% 30%' }}
        >
          <div>
            <div className="relative" />
            <div className="hidden sm:block sm:absolute transform -translate-y-16 translate-x-56">
              <h3
                className="text-4xl leading-tight font-semibold uppercase w-100"
                style={{ lineHeight: '1.05' }}
              >
                Excepteur sint occaecat cupida tat non proident Et assumenda
              </h3>
            </div>
            <Image
              fluid={image}
              className="relative h-100 opacity-35 sm:block hidden"
            />
          </div>
          <span className="sm:hidden">
            <BackgroundImage fluid={image}>
              <div className="bg-navy bg-opacity-20">
                <h3
                  className="text-4xl text-white w-full text-center px-10 py-20 leading-tight font-semibold uppercase w-100"
                  style={{ lineHeight: '1.05' }}
                >
                  Excepteur sint occaecat cupida tat non proident Et assumenda
                </h3>
              </div>
            </BackgroundImage>
          </span>

          <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end px-5 sm:px-0">
            <RoleItem>.NET utvikler</RoleItem>
            <RoleItem>Java utvikler</RoleItem>
            <RoleItem>c# utvikler</RoleItem>
            <RoleItem>Agile & Devops</RoleItem>
          </div>
          <div
            className="h-2px w-full mx-5 sm:hidden"
            style={{ background: 'rgba(6, 24, 56, 0.3)' }}
          />
          <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end px-5 sm:px-0">
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
      className={`flex w-full sm:text-sm md:text-base items-center my-2 h-10 uppercase ${
        color || 'text-navy'
      } text-navy font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow color={color || 'text-navy'} />
    </div>
  </Link>
);
