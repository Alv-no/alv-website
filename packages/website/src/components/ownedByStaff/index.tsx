import React from 'react';
import { Icon } from 'shared-components';
const { Chart } = Icon;

interface Props {
  children?: React.ReactNode
}

export const OwnedByStaff : React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-darkblue bg-opacity-50 w-full text-white tracking-wider lg:py-20 py-10 sm:mt-15">
      <div
        className="max-w-1440 mx-auto px-5 sm:px-12 twelve:grid gap-x-10 2xl:gap-x-25"
        style={{ gridTemplateColumns: 'auto 60%' }}
      >
        <div className="">
          <h3 className="text-4xl sm:text-about-xl font-light lg:mb-10 seven:mb-5 uppercase">
            Eid av våre ansatte
          </h3>
          <p className="font-light hidden twelve:block text-xl">{children}</p>
        </div>
        <div className="seven:flex-row sm:flex flex-col justify-center h-full items-center">
          <div className="h-64 mx-auto seven:mb-0 sm:mb-20 mb-5 -mt-10 sm:mt-0  scale-50 transform -translate-x-6 sm:scale-80 sm:translate-x-0 lg:scale-100 seven:-translate-y-12 seven:-translate-x-10 lg:mr-16 xl:mx-auto">
            <Chart />
          </div>
          <div className="flex">
            <div className="tracking-wider border-r-2 sm:pr-6 pr-3">
              <div className="text-slider font-semibold mb-10">50%</div>
              <div className="text-slider font-semibold mb-10">25%</div>
              <div className="text-slider font-semibold">25%</div>
            </div>
            <div className="text-footer sm:text-lg font-light tracking-wider w-64 pl-3 sm:pl-6">
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
        <p className="font-light mt-15 lg:w-4/6 twelve:hidden text-footer sm:text-xl lg:mx-auto">
          {children}
        </p>
      </div>
    </div>
  );
};
