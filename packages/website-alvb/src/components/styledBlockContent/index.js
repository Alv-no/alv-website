import * as styles from "./StyledBlockContent.module.css";
import { BlockContent } from "shared-components";
import React from "react";
import config from "../../config";

export const StyledBlockContent = ({ blocks }) => (
  <span className={styles.body}>
    <BlockContent blocks={blocks} config={config} />
  </span>
);
