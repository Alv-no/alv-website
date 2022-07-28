import { window } from 'browser-monads';

/* eslint-disable no-console */
export const handleEmailSubmit = async (productName, email) => {
  const data = { productName, email, subject: 'Email from website' };
  const mailApiUrl =
    window.location.protocol +
    '//mail-api-alvb.' +
    window.location.hostname +
    '/send';

  const response = await fetch(mailApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.log('COULD NOT SEND EMAIL');
      console.error('Error:', error);
    });

  return response;
};
