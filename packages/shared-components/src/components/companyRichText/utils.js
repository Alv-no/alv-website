import { window } from 'browser-monads';

/* eslint-disable no-console */
export const handleEmailSubmit = async (productName, email) => {
  const mailApiUrl = window.location.protocol + '//mail-api-alvb.alvb.no/send';

  const data = { productName, email, subject: 'Email from website' };

  const response = await fetch(mailApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error(error);
  });

  return response;
};
