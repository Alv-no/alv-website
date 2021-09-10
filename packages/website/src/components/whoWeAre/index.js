import React from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import Fade from 'react-reveal/Fade';

export const WhoWeAre = ({ title, children }) => {
  return (
    <>
      <div
        className="mx-5 sm:mx-16 twelve:px-12 twelve:grid twelve:mx-auto text-white twelve:mt-20 mt-8 sm:mt-10 tracking-wider gap-x-10 max-w-1440 twleve:mx-auto"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <div className="twelve:flex justify-end w-full ">
          <Fade>
            <div>
              <h4 className="uppercase tracking-wider font-semibold mt-2 text-footer sm:text-about">
                {title}
              </h4>
              <div className="w-10 h-2px bg-yellow mt-2 mb-4" />
            </div>
          </Fade>
        </div>
        <Fade>
          <div className="max-w-seven text-footer sm:text-about">
            {children}
            <div className="twelve:block hidden">
              <Link to="/om-oss">
                <Button.CtaArrow>Les Mer</Button.CtaArrow>
              </Link>
            </div>
          </div>
        </Fade>
        <div className="twelve:hidden sm:block flex justify-between">
          <div />
          <Link to="/om-oss">
            <Button.CtaArrow>Les Mer</Button.CtaArrow>
          </Link>
        </div>
      </div>
    </>
  );
};
