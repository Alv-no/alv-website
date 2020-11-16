import React from 'react';

export const Description = ({ children, align }) => (
  <p
<<<<<<< HEAD
    className={`text-white text-${align} text-xl max-w-570 tracking-wider mx-5 sm:mx-auto font-thin`}
=======
    className={`text-white text-${align} lg:text-xl text-mobile max-w-570 tracking-wider mx-5 sm:mx-auto font-thin `}
>>>>>>> 5f26b437c4fe8ed8b6517650173ad998a6c60ea4
  >
    {children}
  </p>
);
