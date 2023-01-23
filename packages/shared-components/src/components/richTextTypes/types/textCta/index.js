import React from 'react';

const TextCta = ({
  heading,
  description,
  buttonLink,
  buttonText,
  whiteOnBlue,
  layout,
}) => (
  <section
    className={`${
      whiteOnBlue ? 'bg-navy text-white my-10 py-8' : 'bg-white text-navy mt-10'
    } ${
      layout === 'horizontal'
        ? ' justify-between items-center'
        : 'flex-col text-center'
    } md:flex md:px-8 px-4 md:gap-6 tracking-wider`}
  >
    <div>
      <span className={`block ${layout === 'horizontal' ? 'mb-0' : 'mb-1'}`}>
        {description}
      </span>
      <h2 className="text-cta-section font-semibold" style={{ marginTop: 0 }}>
        {heading}
      </h2>
    </div>
    <div>
      <a
        href={buttonLink}
        className={`inline-block px-5 rounded-full font-semibold text-base uppercase tracking-wider py-1 md:mt-0 mt-3 border border-2 whitespace-nowrap ${
          whiteOnBlue ? 'border-white' : 'border-navy'
        } `}
      >
        {buttonText}
      </a>
    </div>
  </section>
);

export default TextCta;
