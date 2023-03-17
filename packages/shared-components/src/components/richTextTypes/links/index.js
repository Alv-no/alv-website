import React from "react";
import { Link } from "gatsby";
import * as Button from "shared-components/src/components/button";

export const LinkList = ({ list }) => {
  return (
    <div className="divide-y-2 divide-divide divide-solid divide-navy h-full flex flex-col justify-end w-full flex-1 md:max-w-[400px]">
      {list.map(({ link, text }, i) => (
        <LinkItem key={i} link={link}>
          {text}
        </LinkItem>
      ))}
    </div>
  );
};

const LinkItem = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className="flex w-full items-center h-12 uppercase font-semibold justify-between">
        <p style={{ marginBottom: 0 }}>{children}</p>
        <Button.CtaArrow />
      </div>
    </Link>
  );
};
