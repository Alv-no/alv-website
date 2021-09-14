import React from 'react';
import * as Button from '../../../../shared-components/button';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { BgImage } from 'gbimage-bridge';

export const RolesList = ({ image, roles, categoryName }) => {
  return (
    <>
      <div className="w-full" id="tjenester">
        <div
          className="max-w-1200 mx-auto sm:grid py-8 lg:gap-x-15 sm:gap-x-0 justify-between sm:pr-12"
          style={{ gridTemplateColumns: '30% 30% 30%' }}
          id="tjenester"
        >
          <div>
            <div className="relative" />
            <div className="hidden sm:block sm:absolute transform translate-y-4 translate-x-56 z-40">
              <h3
                className="text-4xl leading-tight font-semibold uppercase"
                style={{ lineHeight: '1.05' }}
              >
                Tjenester innenfor <br /> {categoryName}
              </h3>
            </div>
            <GatsbyImage
              image={image}
              className="relative h-100 opacity-35 sm:block hidden md:-ml-10"
            />
          </div>
          <span className="sm:hidden">
            <BgImage image={image}>
              <div className="bg-navy bg-opacity-20">
                <h3
                  className="text-4xl text-white w-full text-center px-10 py-20 leading-tight font-semibold uppercase"
                  style={{ lineHeight: '1.05' }}
                >
                  Tjenester innenfor <br /> {categoryName}
                </h3>
              </div>
            </BgImage>
          </span>

          <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end px-5 sm:px-0">
            {roles &&
              roles.slice(0, Math.ceil(roles.length / 2)).map((role) => {
                return (
                  <RoleItem
                    internalLink={`${role.node.parentPage.slug.current}/${role.node.slug.current}`}
                  >
                    {role.node.heroHeading}
                  </RoleItem>
                );
              })}
          </div>
          <div
            className="h-2px w-full mx-5 sm:hidden"
            style={{ background: 'rgba(6, 24, 56, 0.3)' }}
          />
          <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end px-5 sm:px-0">
            {roles &&
              roles
                .slice(Math.ceil(roles.length / 2), roles.length)
                .map((role) => {
                  return (
                    <RoleItem
                      internalLink={`${role.node.parentPage.slug.current}/${role.node.slug.current}`}
                    >
                      {role.node.heroHeading}
                    </RoleItem>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export const RoleItem = ({ children, color, internalLink }) => (
  <Link to={`/vi-tilbyr/${internalLink || ''}`}>
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
