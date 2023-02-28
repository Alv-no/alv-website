import React from "react";

const LinkableHeading = ({ heading }) => {
  let idFromHeading = heading?.split(" ").join("-");
  idFromHeading = idFromHeading?.toLowerCase();
  return (
    <h2 id={idFromHeading} style={{ fontWeight: "bold" }}>
      {heading}
    </h2>
  );
};

export default LinkableHeading;
