import React from "react";
import * as Button from "../../../../shared-components/src/components/button";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-link";

export const RolesList = ({ image, roles, categoryName }) => {
  return (
    <div className="grid grid-cols-3 gap-x-12 h-fit">
      <div className="col-span-3 seven:col-span-1 h-fit">
        <GatsbyImage
          className="opacity-60 h-[320px]"
          image={image}
          alt={`${categoryName}-tjenester`}
        />
        <h3
          className="seven:text-4xl seven:hidden block w-full pt-8 leading-tight font-semibold uppercase hyphenate text-3xl relative text-center bottom-[225px] h-0"
          style={{ lineHeight: "1.05" }}
        >
          Tjenester innenfor <br /> {categoryName}
        </h3>
      </div>

      <div class="col-span-3 seven:col-span-2 grid grid-cols-2 gap-x-12">
        {/* Title shown on larger devices */}
        <div className="col-span-1 seven:col-span-2 hidden seven:block">
          <h3
            className="seven:text-4xl w-full py-8 leading-tight font-semibold uppercase hyphenate text-3xl ml-[-150px] relative"
            style={{ lineHeight: "1.05" }}
          >
            Tjenester innenfor <br /> {categoryName}
          </h3>
        </div>

        <div className="col-span-3 seven:col-span-1">
          <div className="divide-solid divide-y-2 divide-lightnavy flex flex-col seven:px-0">
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
            <div class="divide-solid divide-y-2 divide-lightnavy seven:hidden"></div>
          </div>
        </div>

        <div className="col-span-3 seven:col-span-1">
          <div className="divide-y-2 divide-lightnavy divide-solid flex flex-col seven:px-0 seven:mb-0">
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
      </div>
    </div>
  );
};

export const RoleItem = ({ children, color, internalLink }) => (
  <Link to={`/vi-tilbyr/${internalLink || ""}`}>
    <div
      className={`flex w-full sm:text-sm lg:text-lg items-center my-2 h-10 uppercase ${
        color || "text-navy"
      } text-navy font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow color={color || "text-navy"} />
    </div>
  </Link>
);
