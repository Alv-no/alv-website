import React from "react";
import { Tag } from "../icon";
import { Checkbox } from "../checkbox";

export const EmployeeFilter = ({ allTags, onChange }) => (
  <div className="mx-auto flex md:flex-row flex-col text-white sm:items-center justify-center px-4 sm:px-4 mb-10">
    <div className="flex mr-4 text-base tracking-wider font-bold mb-5 sm:mb-3">
      Kategorier{" "}
      <span className="transform scale-10 -translate-y-2px h-5 -mx-32">
        <Tag />
      </span>
    </div>
    <div className="flex -ml-4 flex-wrap items-center">
      {allTags.map((sanityTag) => {
        return (
          <Checkbox
            onChange={onChange}
            key={sanityTag.node.id}
            {...sanityTag.node}
            defaultChecked={false}
          >
            {sanityTag.node.tag}
          </Checkbox>
        );
      })}
    </div>
  </div>
);
