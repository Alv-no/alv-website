import React from "react";
import { Container } from "shared-components";
import config from "../../config";
import Multicol from "../multicol";
import VideoList from "../videoList";

const Sections = ({ sections, maxWidth }) => {
  const componentMapper = {
    Multicol: Multicol,
    VideoList: VideoList,
  };

  return (
    <>
      {sections.map((section) => {
        const Component = componentMapper[section.__typename];

        return (
          <Container
            key={section._key}
            theme={section.theme}
            maxWidth={maxWidth}
          >
            <Component {...section} config={config} />
          </Container>
        );
      })}
    </>
  );
};

export default Sections;
