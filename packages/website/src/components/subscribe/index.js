import React from 'react';

export const Subscribe = () => {
  return (
    <>
      <div className="inline-flex">
        <input
          className="w-50 rounded-full text-sm py-3 px-5 outline-none border border-white bg-footerblue placeholder-white"
          placeholder="E-post"
        />
        <button
          type="button"
          aria-label="subscribe"
          className="ml-6 focus:outline-none text-sm tracking-wider font-bold uppercase"
        >
          Meld På
        </button>
      </div>
    </>
  );
};
