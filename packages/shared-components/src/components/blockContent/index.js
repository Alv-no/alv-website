import PortableText from "@sanity/block-content-to-react";
import React from "react";
import { richTextTypesSerializer } from "../richTextTypes";
import * as styles from "./Blockcontent.module.css";

export const BlockContent = ({
  blocks,
  noStyle,
  whiteText,
  darkText,
  config,
}) => (
  <span
    className={`block-content ${
      !noStyle &&
      (whiteText ? styles.whiteText : darkText ? styles.darkText : styles.body)
    }`}
  >
    <PortableText
      blocks={blocks}
      projectId={config.SANITY_PROJECT_ID}
      dataset={config.SANITY_DATASET}
      serializers={richTextTypesSerializer(config)}
    />
  </span>
);
