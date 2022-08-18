import React, { useState, useRef, useEffect } from 'react';
import { Arrow as ArrowIcon } from '../icon';
import Link from 'gatsby-link';

export const Line = ({ children, navy }) => (
  <div className="flex cursor-pointer">
    <div className="w-8 h-2px bg-theme-accent mr-4 transform translate-y-1 font-semibold" />
    <span
      className={`transform -translate-y-2 uppercase ${navy && 'text-navy'}`}
    >
      {children}
    </span>
  </div>
);

export const Arrow = ({ children, color }) => (
  <div className="font-semibold uppercase w-32 flex text-right items-center tracking-wider">
    {children}{' '}
    <span className="ml-2 transform scale-80">
      <ArrowIcon color={color} />
    </span>
  </div>
);

export const OvalSimple = ({ children, onClick }) => (
  <button
    className="uppercase tracking-wider text-base px-8 py-6px text-navy border border-bordergray rounded-full font-semibold focus:outline-none"
    style={{ border: '2px solid #E3E3E3' }}
    onClick={onClick}
    aria-label={children}
  >
    {children}
  </button>
);

export const ProductCta = ({ children, onClick, productName, buttonText }) => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [buttonWidth, setButtonWidth] = useState(null);

  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleRevealInput = () => {
    setShowInput(true);
  };

  // Set initial width to facilitate for transition effect
  useEffect(() => {
    if (buttonRef) {
      setButtonWidth(buttonRef.current.offsetWidth + 'px');
    }
  }, []);

  useEffect(() => {
    if (!showInput && buttonWidth) {
      buttonRef.current.style.width = buttonWidth;
    }
    if (showInput && buttonWidth) {
      buttonRef.current.style.width = '330px';
      inputRef.current.focus();
    }
  }, [buttonWidth, showInput]);

  return (
    <div className="my-6">
      <div className="relative inline-block">
        <button
          ref={buttonRef}
          className={`uppercase tracking-wider text-base px-8 py-6px text-navy border border-navy rounded-full font-semibold focus:outline-none ease-all transition duration-500 ease-all ${
            showInput && 'pointer-events-none'
          }`}
          style={{
            borderWidth: '2px',
            transition: '0.5s ease all',
            height: '42px',
          }}
          onClick={handleRevealInput}
          aria-label={children}
        >
          <span
            className={`transition duration-500 whitespace-nowrap valid:text-green invalid:text-red ${
              showInput && 'opacity-0 '
            } h-full`}
          >
            {buttonText.en}
          </span>
        </button>
        <form>
          <input
            ref={inputRef}
            className={`absolute left-0 bg-none bottom-1/2 transform pl-8 translate-y-1/2 w-72 focus:outline-none ${
              !showInput && 'pointer-events-none opacity-0'
            }`}
            style={{ background: 'none' }}
            placeholder="Enter your email here..."
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className={`absolute right-0 bottom-1/2 transform translate-y-1/2 w-18 bg-navy rounded-r-full h-full flex items-center transition duration-500 opacity-0 ${
              showInput && 'opacity-100'
            }`}
          >
            <button
              type="button"
              onClick={() => onClick(productName, email)}
              className="text-white ml-3 focus:outline-none"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const CtaArrow = ({ children, onClick, path }) => (
  <Link to={path || ''}>
    <button
      className="flex items-center focus:outline-none tracking-wider"
      type="button"
      onClick={onClick}
      aria-label={children}
    >
      <span className="mr-2 block uppercase font-semibold">{children}</span>{' '}
      <ArrowIcon />
    </button>
  </Link>
);

export const FormSelect = ({ id, active, children, onClick }) => (
  <div>
    <div
      onClick={onClick}
      className={`flex items-center font-semibold uppercase mb-3 ${
        active === id && 'text-theme-accent'
      } transition duration-300 hover:text-theme-accent cursor-pointer`}
      id={id}
    >
      {children}
      <span className="transform ml-3">
        <Arrow />
      </span>
    </div>
  </div>
);
