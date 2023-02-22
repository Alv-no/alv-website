import React from "react";
import { fileUrl } from "../../../utils";
import { Document } from "../../icon";
import * as styles from "./Download.module.css";

const Download = ({ file, buttonText, config }) => (
  <div className={styles.downloadWrapper}>
    <a
      className={styles.downloadButton}
      href={fileUrl(file.asset._ref, config)}
      style={{ textDecoration: "none" }}
    >
      <Document />
      <span>{buttonText}</span>
    </a>
  </div>
);

export default Download;
