import React from 'react';
import * as Icon from '../icon';

export const OwnedByStaff = ({ children }) => {
  return (
    <div className="bg-darkblue bg-opacity-50 w-full text-white tracking-wider py-20 mt-15">
      <div
        className="max-w-1440 mx-auto px-12 grid gap-x-25"
        style={{ gridTemplateColumns: '35% auto' }}
      >
        <div className="">
          <h3 className="text-about-xl font-light mb-10 uppercase">
            Eid av våre ansatte
          </h3>
          <p className="font-light text-xl">{children}</p>
        </div>
        <div className="flex h-full items-center">
          <div className="w-64 h-64 transform -translate-y-12 -translate-x-10 mr-16">
            <Icon.Chart />
          </div>
          <div className="flex">
            <div className="tracking-wider border-r-2 pr-6">
              <div className="text-slider font-semibold mb-10">50%</div>
              <div className="text-slider font-semibold mb-10">25%</div>
              <div className="text-slider font-semibold">25%</div>
            </div>
            <div className="text-lg font-light tracking-wider w-64 pl-6">
              <p className="mb-9 leading-snug">
                <span className="font-semibold">Reinvestert</span> tilbake i
                selskapet
              </p>
              <p className="mb-9 leading-snug">
                <span className="font-semibold">Fordelt</span> utover ansatte i
                form av bonus
              </p>
              <p className="leading-snug">
                <span className="font-semibold">Tilgjengelig</span> som utbytte
                for eiere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
