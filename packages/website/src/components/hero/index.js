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

  TxtRotate.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = false;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };
  return (
    <div className="bg-navy w-full flex justify-center items-center h-screen -mt-25 p-12 relative flex-col">
      <Title
        bold={false}
        size="lg:text-5xl sm:text-hero-tablet text-hero-mobile leading-tight"
      >
        <div>Vi bygger </div>
        <div className="font-black">Norges mest attraktive</div>
        <span>konsulentselskap</span>
        {/* <span
          className="txt-rotate"
          data-period="2000"
          data-rotate='["konsulentselskap"]'
        >
          konsulentselskap
        </span> */}
      </Title>
      <div className="sm:h-3 h-4" />
      <div className="">
        <Icon.ScrollToContinue />
      </div>
    </div>
  );
};
