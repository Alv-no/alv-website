import React from "react";
import Cta from "./cta";
import ProductCta from "./cta/productCta";
import TextCta from "./cta/textCta";
import Download from "./download";
import { ImageTextFlip, LinkableHeading } from "./layout";
import { LinkList } from "./links";
import MediaComponent from "./mediaComponent";

export const richTextTypesSerializer = (config) => ({
  types: {
    cta: (props) => <Cta {...props.node} config={config} />,

    image: (props) => (
      <MediaComponent type="image" {...props.node} config={config} />
    ),
    video: (props) => (
      <MediaComponent type="video" {...props.node} config={config} />
    ),
    youtube: (props) => (
      <MediaComponent type="youtube" {...props.node} config={config} />
    ),
    download: (props) => <Download {...props.node} config={config} />,

    // Layout
    imageTextFlip: (props) => <ImageTextFlip {...props.node} config={config} />,
    linkableHeading: (props) => (
      <LinkableHeading heading={props.node?.Heading} config={config} />
    ),

    linkList: (props) => <LinkList {...props.node} />,

    // for backwards compatibility
    // deprecated types can be safely removed after running a sanity script that replaces the deprecated types with the new ones
    // see https://www.sanity.io/docs/migrating-data for more info
    headingDescButtonCta: (props) => <TextCta {...props.node} />,
    productCta: (props) => <ProductCta {...props.node} config={config} />,
  },
  marks: {
    "alv-yellow": ({ children }) => (
      <strong style={{ color: "#eabb26", fontSize: "120%" }}>{children}</strong>
    ),
  },
});
