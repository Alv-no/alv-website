import React from "react";
import * as styles from "./textCta.module.css";

const TextCta = ({
  heading,
  description,
  link,
  buttonText,
  whiteOnBlue = true,
  layout = "horizontal",
  withMedia = false,
  buttonLink,
}) => {
  // conditional styling
  let containerClassnames =
    "md:flex md:px-8 sm:px-4 px-12 md:gap-6 tracking-wider text-center -mx-6 sm:mx-0";

  whiteOnBlue
    ? (containerClassnames += " bg-navy text-white mb-10 py-8")
    : (containerClassnames += " bg-white text-navy");

  layout === "horizontal"
    ? (containerClassnames += " justify-between items-center md:text-left")
    : (containerClassnames += " flex-col text-center");

  withMedia
    ? (containerClassnames += " mt-0")
    : (containerClassnames += " mt-10");

  const href = buttonLink ? buttonLink : link;

  return (
    <ConditionalWrapper
      condition={!buttonText}
      wrapper={(children) => (
        <a href={href} title={buttonText}>
          {children}
        </a>
      )}
    >
      <section className={containerClassnames}>
        <div className={styles.textWrapper}>
          <span
            className={`block ${layout === "horizontal" ? "mb-0" : "mb-1"}`}
          >
            {description}
          </span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        {buttonText && (
          <div>
            <a
              href={href}
              className={`inline-block px-5 rounded-full font-semibold text-base uppercase tracking-wider py-1 md:mt-0 mt-3 border border-2 whitespace-nowrap ${
                whiteOnBlue ? "border-white" : "border-navy"
              }`}
            >
              {buttonText}
            </a>
          </div>
        )}
      </section>
    </ConditionalWrapper>
  );
};

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default TextCta;
