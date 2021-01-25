import React, { useState, useEffect } from 'react';
import { Title } from '../title';
import * as Icon from '../icon';

export const Hero = () => {
  const TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) {
      const elements = document.getElementsByClassName('txt-rotate');
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML =
        '.txt-rotate > .wrap { padding-right: 8px } @media only screen and (max-width: 768px) { .text-rotate .wrap { padding-right: 30px; } } ';
      document.body.appendChild(css);
      setActive(true);
    }
  }, [active]);

  return (
    <div className="bg-navy w-full flex justify-center items-center h-screen -mt-25 px-5 sm:p-12 relative flex-col">
      <Title
        bold={false}
        size="lg:text-5xl sm:text-hero-tablet text-hero-sm leading-tight"
      >
        <div>Vi bygger </div>
        <div className="font-black">Norges mest attraktive</div>
        <span className="xs:hidden">konsulent-selskap</span>
        <span className="hidden xs:inline">konsulentselskap</span>
      </Title>
      <div className="sm:h-3 h-4" />
      <div className="">
        <Icon.ScrollToContinue />
      </div>
    </div>
  );
};
