import React from 'react';
import * as Button from '../../../../shared-components/src/components/button';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { BgImage } from 'gbimage-bridge';

export const RolesList = ({ image, roles, categoryName }) => {
  return (
    <div
      className="sm:grid justify-between"
      style={{ gridTemplateColumns: '30% 30% 30%' }}
      id="tjenester"
    >
      <div>
        <GatsbyImage
          alt={`${categoryName}-tjenester`}
          image={image}
          className="relative h-80 opacity-35 sm:block hidden"
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

      <div>
        <div className="relative" />
        <div className="hidden sm:block sm:absolute transform translate-y-4 lg:-translate-x-44 z-40">
          <h3
            className="text-4xl leading-tight font-semibold uppercase"
            style={{ lineHeight: '1.05' }}
          >
            Tjenester innenfor <br /> {categoryName}
          </h3>
        </div>
        <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end sm:px-0">
          {roles &&
            roles.slice(0, Math.ceil(roles.length / 2)).map((role, index) => {
              return (
                <RoleItem
                  key={index}
                  internalLink={`${role.node.parentPage.slug.current}/${role.node.slug.current}`}
                >
                  {role.node.heroHeading}
                </RoleItem>
              );
            })}
        </div>
      </div>
      <div
        className="h-2px w-full sm:hidden"
        style={{ background: 'rgba(6, 24, 56, 0.3)' }}
      />
      <div className="divide-y-2 divide-lightnavy divide-solid h-full flex flex-col justify-end sm:px-0">
        {roles &&
          roles
            .slice(Math.ceil(roles.length / 2), roles.length)
            .map((role, index) => {
              return (
                <RoleItem
                  key={index}
                  internalLink={`${role.node.parentPage.slug.current}/${role.node.slug.current}`}
                >
                  {role.node.heroHeading}
                </RoleItem>
              );
            })}
      </div>
    </div>
  );
};

export const RoleItem = ({ children, color, internalLink }) => (
  <Link to={`/vi-tilbyr/${internalLink || ''}`}>
    <div
      className={`flex w-full sm:text-sm lg:text-lg items-center my-2 h-10 uppercase ${
        color || 'text-navy'
      } text-navy font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow color={color || 'text-navy'} />
    </div>
  </Link>
);
