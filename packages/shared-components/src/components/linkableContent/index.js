import React from "react";
import { Arrow } from "shared-components/src/components/icon";
import { Title } from "shared-components/src/components/title";
import { BlockContent } from "../blockContent";

export const LinkableContent = ({ raw, heading, scrollTo, config }) => {
  // create menuitems from linkable heading types used in sanity rich text
  const navElements = raw
    .filter(
      (el) =>
        el._type === "linkableHeading" ||
        (el._type === "imageTextFlip" &&
          el.linkableBlock.find((node) => node.Heading))
    )
    .map((el) => {
      let heading;
      if (el._type === "linkableHeading") {
        heading = el.Heading;
      } else {
        heading = el.linkableBlock?.find((node) => node.Heading)?.Heading;
      }
      let formattedId = heading?.split(" ").join("-");
      formattedId = formattedId?.toLowerCase();
      return {
        id: formattedId,
        text: heading,
      };
    });

  return (
    <div className="md:mt-10 md:grid grid-cols-[27%,auto] gap-y-10 max-w-[1080px] mx-auto pt-5 md:pt-0">
      <div />
      <div className="md:hidden mb-5 sm:mb-10 block">
        <ScrollToIdNav navElements={navElements} onClick={scrollTo} />
      </div>
      <span>
        <Title
          align="text-left md:text-index relative"
          noDot
          underline
          color="text-navy"
        >
          {heading}
        </Title>
      </span>
      <div className="hidden md:block">
        <ScrollToIdNav navElements={navElements} onClick={scrollTo} />
      </div>
      <BlockContent blocks={raw} config={config} />
    </div>
  );
};

const ScrollToIdNav = ({ navElements, onClick }) => (
  <ul className="md:sticky hide-scrollbar top-10 max-h-90vh overflow-y-scroll text-lg -mt-2 list-style-none text-navynav opacity-80 tracking-wider block divide-y-2 divide-lightnavy divide-solid md:pr-10 mb-3">
    {navElements.map((el, index) => (
      <button
        key={index}
        aria-label="Scroll Link"
        className="py-3 block md:mr-0 mr-4 w-full focus:outline-none"
        onClick={onClick}
        name={el.id}
      >
        <span className="flex justify-between items-center pointer-events-none text-left text-base font-bold">
          {el.text}
          <span className="scale-90 transform">
            <Arrow />
          </span>
        </span>
      </button>
    ))}
  </ul>
);
