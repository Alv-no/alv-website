import { window } from 'browser-monads';

/* eslint-disable no-console */
export const handleEmailSubmit = (productName, email) => {
  const mailApiUrl =
    window.location.protocol +
    '//mail-api.' +
    window.location.hostname +
    '/send';

  const xhr = new XMLHttpRequest();
  xhr.open('POST', mailApiUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log('An automated email was sent with the following details:');
      console.log(productName, email);
    } else if (this.readyState === XMLHttpRequest.DONE && this.status === 500) {
      console.log('COULD NOT SEND EMAIL');
    }
  };
  const data = { productName, email, subject: 'Email from website' };
  xhr.send(data);
};
