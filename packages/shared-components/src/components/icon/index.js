import React from 'react';

export const Tag = () => (
  <svg>
    <path
      fill="#EABB26"
      d="M30.1,7.1h162.3l36.1,59.8l-36.1,62.5H30.1c-14.5-1.4-25.2-14.2-24-28.8V35.9
	C4.9,21.3,15.6,8.5,30.1,7.1z"
    />
  </svg>
);

export const Shade = () => (
  <svg width="132.875" height="34.615" viewBox="0 0 132.875 34.615">
    <path d="M122.671,0H0V34.615H132.875Z" fill="#061838" opacity="0.293" />
  </svg>
);

export const VideoPlay = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" className="text-theme-text">
    <path
      id="Path_5"
      data-name="Path 5"
      d="M13,8,0,0V16Z"
      transform="translate(31 27)"
      fill="#fff"
    />
    <g
      id="Ellipse_2"
      data-name="Ellipse 2"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
    >
      <circle cx="35" cy="35" r="35" stroke="none" />
      <circle cx="35" cy="35" r="34" fill="none" />
    </g>
  </svg>
);

export const Cross = ({ white }) => (
  <svg width="30.557" height="30.557" viewBox="0 0 30.557 30.557">
    <path
      d="M15.278,18.056l-12.5,12.5L0,27.778l12.5-12.5L0,2.777,2.777,0l12.5,12.5L27.778,0l2.779,2.777-12.5,12.5,12.5,12.5-2.779,2.779Z"
      fill={white ? '#061838' : '#fff'}
    />
  </svg>
);

export const DropdownArrow = ({ white }) => (
  <svg
    width="10.958"
    height="6.49"
    viewBox="0 0 10.958 6.49"
    fill="#fff"
    className="transform -rotate-90 scale-130"
  >
    <path
      id="Path_363"
      d="M7526.707-4437.99l4.141,4.076,3.988-4.076"
      transform="translate(-7525.292 4439.404)"
      fill="none"
      stroke={white ? '#061838' : '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const CtaArrow = ({ blue }) => (
  <svg width="67" height="67" viewBox="0 0 67 67">
    <g transform="translate(-950 -2347)">
      <g transform="translate(-312 1436)">
        <g
          transform="translate(1262 911)"
          fill="none"
          stroke={blue ? 'rgba(6, 24, 56)' : '#fff'}
          strokeWidth="3"
        >
          <circle cx="33.5" cy="33.5" r="33.5" stroke="none" />
          <circle cx="33.5" cy="33.5" r="32" fill="none" />
        </g>
      </g>
      <path
        id="Path_375"
        d="M-13902.463,2330.474l9.32,9.083-9.32,9.439"
        transform="translate(14881.65 41.026)"
        fill="none"
        stroke={blue ? 'rgba(6, 24, 56)' : '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </g>
  </svg>
);
export const SliderArrowBlue = () => (
  <svg width="67" height="67" viewBox="0 0 67 67">
    <g transform="translate(-950 -2347)">
      <g transform="translate(-312 1436)">
        <g
          transform="translate(1262 911)"
          fill="none"
          stroke="#061838"
          strokeWidth="4"
        >
          <circle cx="33.5" cy="33.5" r="33.5" stroke="none" />
          <circle cx="33.5" cy="33.5" r="32" fill="none" />
        </g>
      </g>
      <path
        id="Path_375"
        d="M-13902.463,2330.474l9.32,9.083-9.32,9.439"
        transform="translate(14881.65 41.026)"
        fill="none"
        stroke="#061838"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </g>
  </svg>
);
export const SliderArrow = () => (
  <svg width="67" height="67" viewBox="0 0 67 67">
    <g transform="translate(-950 -2347)">
      <g transform="translate(-312 1436)">
        <g
          transform="translate(1262 911)"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        >
          <circle cx="33.5" cy="33.5" r="33.5" stroke="none" />
          <circle cx="33.5" cy="33.5" r="32" fill="none" />
        </g>
      </g>
      <path
        id="Path_375"
        d="M-13902.463,2330.474l9.32,9.083-9.32,9.439"
        transform="translate(14881.65 41.026)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </g>
  </svg>
);

export const Dropdown = ({ white }) => (
  <div className="flex flex-col justify-center items-center h-7">
    <div
      className={`w-7 bg-white ${!white && 'eight:bg-theme-text'} h-px mb-2`}
    />
    <div className={`w-7 bg-white ${!white && 'eight:bg-theme-text'} h-px`} />
  </div>
);

export const DropdownMini = () => (
  <svg width="10.958" height="6.49" viewBox="0 0 10.958 6.49">
    <path
      id="Path_363"
      d="M7526.707-4437.99l4.141,4.076,3.988-4.076"
      transform="translate(-7525.292 4439.404)"
      fill="none"
      stroke="#061838"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Facebook = () => (
  <svg width="19" height="19" viewBox="0 0 19 19">
    <defs>
      <clipPath id="clip-path">
        <rect width="19" height="19" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip-path)">
      <rect width="19" height="19" transform="translate(0 0)" fill="none" />
      <path
        d="M86.518,19.233V10.472H89.51l.427-3.419H86.518V4.915c0-.962.321-1.71,1.71-1.71h1.816V.107c-.427,0-1.5-.107-2.671-.107a4.125,4.125,0,0,0-4.381,4.488V7.052H80v3.419h2.992v8.762Z"
        transform="translate(-75.192 0.001)"
        fill="#fff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export const CircleFacebook = ({ white }) => (
  <svg width="22.9" height="22.898" viewBox="0 0 22.9 22.898">
    <path
      id="Path_285"
      data-name="Path 285"
      d="M14.592,173.981a11.45,11.45,0,1,1,11.452,11.454A11.452,11.452,0,0,1,14.592,173.981Zm14.566-6.708a.329.329,0,0,0-.081-.026c-.769,0-1.54-.037-2.307.007a2.483,2.483,0,0,0-2.5,2.29,11.421,11.421,0,0,0-.046,1.43c-.006.33,0,.33-.324.331H22.893v2.716h1.346v6.758H26.96v-6.757h2l.247-2.717H27.056c0-.344,0-.651,0-.958,0-.6.178-.775.787-.775h1.315Z"
      transform="translate(-14.592 -162.537)"
      fill={white ? '#fff' : '#061838'}
    />
  </svg>
);

export const Instagram = () => (
  <svg width="19" height="19" viewBox="0 0 19 19">
    <defs>
      <clipPath>
        <rect width="19" height="19" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip-path)">
      <path
        d="M9.617,1.71a29.487,29.487,0,0,1,3.847.107,4.956,4.956,0,0,1,1.816.321A3.753,3.753,0,0,1,17.1,3.954a4.956,4.956,0,0,1,.321,1.816c0,.962.107,1.282.107,3.847a29.486,29.486,0,0,1-.107,3.847A4.956,4.956,0,0,1,17.1,15.28,3.753,3.753,0,0,1,15.28,17.1a4.956,4.956,0,0,1-1.816.321c-.962,0-1.282.107-3.847.107a29.486,29.486,0,0,1-3.847-.107A4.956,4.956,0,0,1,3.954,17.1,3.753,3.753,0,0,1,2.137,15.28a4.956,4.956,0,0,1-.321-1.816c0-.962-.107-1.282-.107-3.847A29.487,29.487,0,0,1,1.816,5.77a4.956,4.956,0,0,1,.321-1.816,3.838,3.838,0,0,1,.748-1.069,1.807,1.807,0,0,1,1.069-.748A4.956,4.956,0,0,1,5.77,1.816,29.487,29.487,0,0,1,9.617,1.71m0-1.71A31.572,31.572,0,0,0,5.663.107,6.6,6.6,0,0,0,3.312.534,4.183,4.183,0,0,0,1.6,1.6,4.183,4.183,0,0,0,.534,3.312,4.869,4.869,0,0,0,.107,5.663,31.572,31.572,0,0,0,0,9.617,31.572,31.572,0,0,0,.107,13.57a6.6,6.6,0,0,0,.427,2.351A4.183,4.183,0,0,0,1.6,17.631,4.183,4.183,0,0,0,3.312,18.7a6.6,6.6,0,0,0,2.351.427,31.572,31.572,0,0,0,3.954.107,31.572,31.572,0,0,0,3.954-.107,6.6,6.6,0,0,0,2.351-.427A4.483,4.483,0,0,0,18.7,15.921a6.6,6.6,0,0,0,.427-2.351c0-1.069.107-1.389.107-3.954a31.572,31.572,0,0,0-.107-3.954A6.6,6.6,0,0,0,18.7,3.312,4.183,4.183,0,0,0,17.631,1.6,4.183,4.183,0,0,0,15.921.534,6.6,6.6,0,0,0,13.57.107,31.572,31.572,0,0,0,9.617,0m0,4.7A4.836,4.836,0,0,0,4.7,9.617,4.915,4.915,0,1,0,9.617,4.7m0,8.121A3.148,3.148,0,0,1,6.411,9.617,3.148,3.148,0,0,1,9.617,6.411a3.148,3.148,0,0,1,3.206,3.206,3.148,3.148,0,0,1-3.206,3.206m5.129-9.51a1.175,1.175,0,1,0,1.175,1.175,1.186,1.186,0,0,0-1.175-1.175"
        fill="#fff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export const Linkedin = () => (
  <svg width="22.897" height="22.898" viewBox="0 0 22.897 22.898">
    <path
      d="M-178.281,132.586a11.467,11.467,0,0,1-11.482,11.442,11.477,11.477,0,0,1-11.415-11.457,11.474,11.474,0,0,1,11.485-11.442A11.467,11.467,0,0,1-178.281,132.586Zm-5.361,4.686c0-1.824.084-3.6-.028-5.371a2.118,2.118,0,0,0-2.343-2.031,3.136,3.136,0,0,0-2.633,1.294c-.03-.446-.051-.768-.073-1.109h-2.532v7.19h2.752c0-.392-.005-.742,0-1.091.017-1-.007-2,.073-3a1.058,1.058,0,0,1,1.134-1.111c.6.037.889.426.9,1.237.008.927,0,1.854,0,2.781,0,.4,0,.8,0,1.21Zm-9.466-.011v-7.2h-2.7v7.2Zm-2.763-9.668a1.353,1.353,0,0,0,1.4,1.282,1.359,1.359,0,0,0,1.394-1.3,1.331,1.331,0,0,0-1.41-1.267A1.315,1.315,0,0,0-195.872,127.592Z"
      transform="translate(201.178 -121.13)"
      fill="#fff"
    />
  </svg>
);

export const CircleLinkedIn = ({ white }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.897"
    height="22.898"
    viewBox="0 0 22.897 22.898"
  >
    <path
      id="Path_286"
      data-name="Path 286"
      d="M-178.281,132.586a11.467,11.467,0,0,1-11.482,11.442,11.477,11.477,0,0,1-11.415-11.457,11.474,11.474,0,0,1,11.485-11.442A11.467,11.467,0,0,1-178.281,132.586Zm-5.361,4.686c0-1.824.084-3.6-.028-5.371a2.118,2.118,0,0,0-2.343-2.031,3.136,3.136,0,0,0-2.633,1.294c-.03-.446-.051-.768-.073-1.109h-2.532v7.19h2.752c0-.392-.005-.742,0-1.091.017-1-.007-2,.073-3a1.058,1.058,0,0,1,1.134-1.111c.6.037.889.426.9,1.237.008.927,0,1.854,0,2.781,0,.4,0,.8,0,1.21Zm-9.466-.011v-7.2h-2.7v7.2Zm-2.763-9.668a1.353,1.353,0,0,0,1.4,1.282,1.359,1.359,0,0,0,1.394-1.3,1.331,1.331,0,0,0-1.41-1.267A1.315,1.315,0,0,0-195.872,127.592Z"
      transform="translate(201.178 -121.13)"
      fill={white ? '#fff' : '#061838'}
    />
  </svg>
);

export const CircleTwitter = ({ white }) => (
  <svg width="22.894" height="22.898" viewBox="0 0 22.894 22.898">
    <path
      id="Path_287"
      data-name="Path 287"
      d="M-451.425,423.414a11.442,11.442,0,0,1,11.453,11.431,11.439,11.439,0,0,1-11.441,11.467,11.44,11.44,0,0,1-11.453-11.455A11.44,11.44,0,0,1-451.425,423.414Zm-6.753,16.442c.03.049.035.066.047.074.042.029.085.058.13.083a8.153,8.153,0,0,0,7.4.488,8.193,8.193,0,0,0,4.954-7.682.465.465,0,0,1,.205-.426,5.145,5.145,0,0,0,1.207-1.3c-.217.075-.376.134-.538.184s-.328.1-.495.138-.315.055-.544.093a2.722,2.722,0,0,0,1.159-1.535c-.248.115-.491.243-.746.341s-.522.164-.781.253a.366.366,0,0,1-.412-.1,2.867,2.867,0,0,0-3.322-.406,2.882,2.882,0,0,0-1.466,3.012,1.274,1.274,0,0,1,0,.18,8.275,8.275,0,0,1-5.918-3,2.749,2.749,0,0,0-.387,1.527,2.918,2.918,0,0,0,1.216,2.28l-.043.067-1.18-.331c-.065,1.215.658,2.139,2.2,2.857H-456.7a2.971,2.971,0,0,0,2.678,2.017A5.845,5.845,0,0,1-458.178,439.856Z"
      transform="translate(462.865 -423.414)"
      fill={white ? '#fff' : '#061838'}
    />
  </svg>
);

export const TwitterWhite = () => (
  <svg width="22.894" height="22.898" viewBox="0 0 22.894 22.898">
    <path
      d="M-451.425,423.414a11.442,11.442,0,0,1,11.453,11.431,11.439,11.439,0,0,1-11.441,11.467,11.44,11.44,0,0,1-11.453-11.455A11.44,11.44,0,0,1-451.425,423.414Zm-6.753,16.442c.03.049.035.066.047.074.042.029.085.058.13.083a8.153,8.153,0,0,0,7.4.488,8.193,8.193,0,0,0,4.954-7.682.465.465,0,0,1,.205-.426,5.145,5.145,0,0,0,1.207-1.3c-.217.075-.376.134-.538.184s-.328.1-.495.138-.315.055-.544.093a2.722,2.722,0,0,0,1.159-1.535c-.248.115-.491.243-.746.341s-.522.164-.781.253a.366.366,0,0,1-.412-.1,2.867,2.867,0,0,0-3.322-.406,2.882,2.882,0,0,0-1.466,3.012,1.274,1.274,0,0,1,0,.18,8.275,8.275,0,0,1-5.918-3,2.749,2.749,0,0,0-.387,1.527,2.918,2.918,0,0,0,1.216,2.28l-.043.067-1.18-.331c-.065,1.215.658,2.139,2.2,2.857H-456.7a2.971,2.971,0,0,0,2.678,2.017A5.845,5.845,0,0,1-458.178,439.856Z"
      transform="translate(462.865 -423.414)"
      fill="#fff"
    />
  </svg>
);

export const Twitter = () => (
  <svg width="20" height="19" viewBox="0 0 20 19">
    <defs>
      <clipPath>
        <rect width="20" height="19" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip-path)">
      <rect width="19" height="19" transform="translate(0 0)" fill="none" />
      <path
        d="M44.091,17.6A11.12,11.12,0,0,0,55.31,6.381V5.847a8.685,8.685,0,0,0,1.923-2.03,8.87,8.87,0,0,1-2.244.641A4.157,4.157,0,0,0,56.7,2.321a9.8,9.8,0,0,1-2.458.962A3.816,3.816,0,0,0,51.357,2,4.015,4.015,0,0,0,47.4,5.954a2.083,2.083,0,0,0,.107.855,11.047,11.047,0,0,1-8.121-4.167,4.092,4.092,0,0,0-.534,2.03,4.245,4.245,0,0,0,1.71,3.312,3.6,3.6,0,0,1-1.816-.534h0A3.905,3.905,0,0,0,41.954,11.3a3.294,3.294,0,0,1-1.069.107,1.818,1.818,0,0,1-.748-.107,4.048,4.048,0,0,0,3.74,2.778,8.068,8.068,0,0,1-4.915,1.71A2.958,2.958,0,0,1,38,15.677,10.086,10.086,0,0,0,44.091,17.6"
        transform="translate(-38 0.403)"
        fill="#fff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export const ScrollArrow = () => (
  <div className="flex transform translate-y-3 mt-6px sm:mt-px">
    <div className="w-25 h-px bg-white transform translate-x-px"></div>
    <div className="transform rotate-135 mt-px -translate-x-3">
      <div
        className="w-3 h-px bg-white transform rotate-45 -translate-y-6px"
        style={{ transform: 'rotate(45deg) translateY(-6px) translateX(-1px)' }}
      />
      <div
        className="w-3 h-px bg-white"
        style={{ transform: 'rotate(-45deg) translateY(4px) translateX(1px)' }}
      />
    </div>
  </div>
);

export const ScrollToContinue = () => (
  <div className="h-7 w-5 border-white relative transform -rotate-90 -translate-x-8 translate-y-20 sm:translate-y-12 lg:translate-y-20 ">
    <div className="absolute w-80 text-white sm:text-base text-sm tracking-wider font-extralight flex absolute z-20 sm:mr-0 -mr-4 h-7 transform">
      <div className="mr-4 transform rotate-180">
        <ScrollArrow />
      </div>{' '}
      <span className="font-semibold">SCROLL</span>
      <span className="opacity-0">-</span>TO CONTINUE{' '}
    </div>
  </div>
);
export const Chart = () => (
  <svg width="370.486" height="374.047" viewBox="0 0 370.486 374.047">
    <g
      id="Group_3556"
      data-name="Group 3556"
      transform="matrix(0.914, -0.407, 0.407, 0.914, -1759.728, -2423.424)"
    >
      <g id="Group_3555" data-name="Group 3555" transform="translate(9 -35)">
        <path
          id="Subtraction_6"
          data-name="Subtraction 6"
          d="M125,125H0V0H.334A125.439,125.439,0,0,1,25.458,2.534,123.975,123.975,0,0,1,48.858,9.8a124.43,124.43,0,0,1,21.178,11.5,125.211,125.211,0,0,1,18.45,15.223,125.215,125.215,0,0,1,15.224,18.451,124.856,124.856,0,0,1,11.5,21.176,124.162,124.162,0,0,1,7.263,23.4A125.619,125.619,0,0,1,125,124.671c0,.055,0,.11,0,.164V125Z"
          transform="translate(729 3072)"
          fill="#fff"
        />
        <path
          id="Subtraction_8"
          data-name="Subtraction 8"
          d="M125,125H0V0H.334A125.439,125.439,0,0,1,25.458,2.534,123.975,123.975,0,0,1,48.858,9.8a124.43,124.43,0,0,1,21.178,11.5,125.211,125.211,0,0,1,18.45,15.223,125.215,125.215,0,0,1,15.224,18.451,124.856,124.856,0,0,1,11.5,21.176,124.162,124.162,0,0,1,7.263,23.4A125.619,125.619,0,0,1,125,124.671c0,.055,0,.11,0,.164V125Z"
          transform="translate(854 3209) rotate(90)"
          fill="#1e92d0"
        />
      </g>
      <g
        id="Component_64_12"
        data-name="Component 64 – 12"
        transform="translate(579 3026)"
      >
        <g id="Subtraction_4" data-name="Subtraction 4" fill="none">
          <path
            d="M148,294h-.393a149.294,149.294,0,0,1-29.748-2.986A147.606,147.606,0,0,1,11.6,204.218,145.794,145.794,0,0,1,3,176.624a147.8,147.8,0,0,1,0-59.251A145.87,145.87,0,0,1,25.209,64.811,147.594,147.594,0,0,1,147.607,0H148V294Z"
            stroke="none"
          />
          <path
            d="M 147 292.9985961914062 L 147 1.001242518424988 C 137.2543487548828 1.040976405143738 127.5211944580078 2.038045406341553 118.0589599609375 3.966423034667969 C 108.6456527709961 5.884769439697266 99.38726806640625 8.746999740600586 90.54080963134766 12.47365379333496 C 81.85434722900391 16.13234710693359 73.47526550292969 20.66138458251953 65.63642120361328 25.93496131896973 C 57.87107849121094 31.16026878356934 50.57107543945312 37.15876770019531 43.93915557861328 43.76384735107422 C 37.30472946166992 50.37046051025391 31.28138542175293 57.64053726196289 26.03638458251953 65.37211608886719 C 20.74023056030273 73.1798095703125 16.19280815124512 81.52346038818359 12.52034568786621 90.17142486572266 C 8.77907657623291 98.97938537597656 5.905384540557861 108.1991500854492 3.97896146774292 117.5747680664062 C 2.002269268035889 127.1906127929688 1 137.0901489257812 1 146.9984283447266 C 1 156.9070434570312 2.002269268035889 166.8069305419922 3.979000091552734 176.4231567382812 C 5.905345916748047 185.7988433837891 8.77907657623291 195.0188903808594 12.52038478851318 203.8272247314453 C 16.19277000427246 212.4750823974609 20.74023056030273 220.8189544677734 26.03634643554688 228.6270446777344 C 31.27946090698242 236.3560333251953 37.3028450012207 243.6262359619141 43.93923187255859 250.2357330322266 C 50.5711555480957 256.8408813476562 57.87115478515625 262.8394165039062 65.63634490966797 268.0646667480469 C 73.47534942626953 273.3382568359375 81.85442352294922 277.867431640625 90.54088592529297 281.5262451171875 C 99.38638305664062 285.2527160644531 108.6448059082031 288.114990234375 118.0589599609375 290.0335388183594 C 127.5215682983398 291.9618530273438 137.2546691894531 292.9588623046875 147 292.9985961914062 M 148 294 L 147.9991607666016 294 C 147.9421997070312 293.9998474121094 147.8826904296875 293.9998168945312 147.8240356445312 293.9998168945312 L 147.7143402099609 293.9998474121094 L 147.6072235107422 293.9998474121094 C 137.5920715332031 293.9998474121094 127.5836944580078 292.9950256347656 117.8592681884766 291.0133972167969 C 108.3814239501953 289.0818786621094 99.05915069580078 286.2000122070312 90.15265655517578 282.4478149414062 C 81.40680694580078 278.7639465332031 72.97042083740234 274.203857421875 65.07815551757812 268.8943786621094 C 57.2607307434082 263.6340026855469 49.91088485717773 257.5946655273438 43.23353958129883 250.9442749023438 C 36.55450057983398 244.2922668457031 30.48930740356445 236.9725341796875 25.20880699157715 229.1884155273438 C 19.8773078918457 221.3281860351562 15.29823112487793 212.9269256591797 11.5999231338501 204.2181091308594 C 7.831884384155273 195.3467712402344 4.938730716705322 186.0629272460938 2.999461650848389 176.6244201660156 C 1.009153842926025 166.9421081542969 0 156.9744567871094 0 146.9984283447266 C 0 137.0226898193359 1.009153842926025 127.055419921875 2.999461650848389 117.373420715332 C 4.938730716705322 107.9351119995117 7.831884384155273 98.65149688720703 11.5999231338501 89.78046417236328 C 15.29823112487793 81.0716552734375 19.8773078918457 72.67057800292969 25.20880699157715 64.81076812744141 C 30.48930740356445 57.02684783935547 36.55365371704102 49.7071533203125 43.23353958129883 43.05526733398438 C 49.91088485717773 36.40492248535156 57.2607307434082 30.36565399169922 65.07815551757812 25.10530853271484 C 72.97042083740234 19.79580688476562 81.40680694580078 15.23576927185059 90.15265655517578 11.552077293396 C 99.06003570556641 7.799730777740479 108.3822708129883 4.917884826660156 117.8592681884766 2.986577033996582 C 127.5836944580078 1.004769206047058 137.5920715332031 0 147.6072235107422 0 C 147.7373046875 0 147.8707733154297 0.000269230775302276 148 0.0006538461311720312 L 148 293.9992065429688 L 148 294 Z"
            stroke="none"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const ContactArrow = () => (
  <svg width="14.309" height="26.468" viewBox="0 0 14.309 26.468">
    <path
      d="M-13902.461,2330.474l11.895,11.592-11.895,12.047"
      transform="translate(13903.875 -2329.06)"
      className="stroke-current text-theme-text"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
    <g transform="translate(-1061 -2240.344)">
      <path
        d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z"
        transform="translate(1061 2240.344)"
        className="fill-current"
      />
    </g>
  </svg>
);

export const Phone = () => (
  <svg width="19.2" height="19.135" viewBox="0 0 19.2 19.135">
    <defs>
      <clipPath>
        <rect width="19.2" height="19.135" fill="#fff" />
      </clipPath>
    </defs>
    <g clip-path="url(#clip-path)">
      <path
        d="M13.525,30.51a8.389,8.389,0,0,1-3.668-1.022,18.692,18.692,0,0,1-9.346-10.1A8.24,8.24,0,0,1,.059,17.7a2.893,2.893,0,0,1,.924-2.872c.427-.364.792-.8,1.209-1.179a1.347,1.347,0,0,1,2.088.006q1.175,1.116,2.3,2.289a1.345,1.345,0,0,1-.007,2.085c-.385.41-.782.812-1.2,1.19a.569.569,0,0,0-.149.814A12.868,12.868,0,0,0,10.57,25.3a.843.843,0,0,0,.726-.149c.436-.351.8-.791,1.211-1.173a1.389,1.389,0,0,1,2.1-.021q1.178,1.112,2.3,2.288a1.4,1.4,0,0,1-.036,2.145c-.42.439-.857.863-1.285,1.294a2.53,2.53,0,0,1-2.056.825"
        transform="translate(0 -11.376)"
        fill="#fff"
      />
      <path
        d="M72.351,0a9.52,9.52,0,0,1,6.12,3.233A9.689,9.689,0,0,1,80.739,8.18c.121.741-.159,1.227-.77,1.344s-.984-.222-1.138-1.007a7.638,7.638,0,0,0-6.74-6.606.96.96,0,0,1-.9-.989C71.171.406,71.658.007,72.351,0"
        transform="translate(-61.567)"
        fill="#fff"
      />
      <path
        d="M77.329,30.68a4.025,4.025,0,0,1-.889.757.805.805,0,0,1-1.055-.479,5.99,5.99,0,0,1-.223-.773,4.275,4.275,0,0,0-3.2-2.9c-.825-.2-1.192-.846-.77-1.416a1.281,1.281,0,0,1,.935-.492A6.2,6.2,0,0,1,77.19,30.4c0,.045.008.089.012.134l.127.143"
        transform="translate(-61.42 -21.95)"
        fill="#fff"
      />
    </g>
  </svg>
);

export const Mail = () => (
  <svg width="19.2" height="14.743" viewBox="0 0 19.2 14.743">
    <defs>
      <clipPath>
        <rect width="19.2" height="14.743" fill="#fff" />
      </clipPath>
    </defs>
    <g id="Group_4179" data-name="Group 4179" clip-path="url(#clip-path)">
      <path
        d="M9.471,0c2.5,0,4.995,0,7.492.006a4.03,4.03,0,0,1,1.021.134,1.7,1.7,0,0,1,1.159,1.113A.562.562,0,0,1,18.923,2c-.068.053-.142.1-.215.144-2.849,1.8-5.7,3.6-8.545,5.411a.925.925,0,0,1-1.137,0C6.174,5.723,3.309,3.916.448,2.1a2.837,2.837,0,0,1-.272-.185.437.437,0,0,1-.158-.48A1.772,1.772,0,0,1,1.674.041C1.948.019,2.223.007,2.5.006Q5.984,0,9.471,0Z"
        transform="translate(-0.001 -0.001)"
        fill="#fff"
      />
      <path
        d="M9.588,74.548c-2.481,0-4.962,0-7.443-.006a3.442,3.442,0,0,1-.949-.13A1.669,1.669,0,0,1,.03,73.168.466.466,0,0,1,.246,72.6c.163-.109.331-.209.5-.313Q3.9,70.309,7.055,68.325A.817.817,0,0,1,8,68.3c.4.248.8.5,1.194.751a.6.6,0,0,0,.816,0c.448-.289.9-.568,1.347-.861a.581.581,0,0,1,.7.039q1.327.849,2.658,1.691,2.028,1.28,4.06,2.554c.467.293.536.515.3,1.018a1.782,1.782,0,0,1-1.482,1.015,4.407,4.407,0,0,1-.634.036q-3.686,0-7.372,0"
        transform="translate(-0.005 -59.806)"
        fill="#fff"
      />
      <path
        d="M.238,36.1V28.2L6.452,32.15.238,36.1"
        transform="translate(-0.209 -24.77)"
        fill="#fff"
      />
      <path
        d="M106.526,32.207l6.2-3.939v7.878l-6.2-3.938"
        transform="translate(-93.561 -24.828)"
        fill="#fff"
      />
    </g>
  </svg>
);

export const Search = () => (
  <>
    <svg
      version="1.1"
      viewBox="0 0 18.4 18.4"
      fill="#061838"
      width="18"
      height="18"
    >
      <path
        fill="#061838"
        d="M17.1,15.4l-2.6-2.5c1.8-2.6,1.5-6.2-0.8-8.4C11.1,2,7,2.1,4.5,4.7h0C2,7.3,2.1,11.4,4.7,13.9
	c1.3,1.2,2.9,1.8,4.5,1.8c1.4,0,2.8-0.4,3.9-1.3l2.6,2.5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3
	C17.5,16.4,17.5,15.8,17.1,15.4z M6.1,12.4C4.3,10.7,4.2,7.9,6,6.1h0c1.7-1.8,4.6-1.8,6.4-0.1c1.8,1.7,1.8,4.6,0.1,6.4
	C10.7,14.1,7.8,14.2,6.1,12.4z"
      />
    </svg>
  </>
);

export const Cv = () => (
  <svg width="15" height="12" viewBox="0 0 15 12">
    <g transform="translate(-151.5 -1413.5)">
      <g transform="translate(-62 68)">
        <line
          x2="13"
          transform="translate(214.5 1346.5)"
          fill="none"
          stroke="#eabb26"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          x2="13"
          transform="translate(214.5 1351.5)"
          fill="none"
          stroke="#eabb26"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M0,0H7.465"
          transform="translate(214.5 1356.5)"
          fill="none"
          stroke="#eabb26"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </g>
  </svg>
);

export const TransitionArrow = ({ open, white }) => (
  <span
    className={`absolute right-0 mr-7 sm:mr-10 mt-4 eight:hidden transform transition duration-300 ${
      open && 'rotate-90'
    }`}
  >
    <DropdownArrow white={white} />
  </span>
);
