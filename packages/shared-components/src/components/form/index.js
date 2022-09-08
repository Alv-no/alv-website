import React, { useState } from 'react';
import { window } from 'browser-monads';

const useContactForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const mailApiUrl =
    window.location.protocol +
    '//mail-api.' +
    window.location.hostname +
    '/send';

  const submitForm = (e) => {
    e.preventDefault();
    if (sent) return false;

    const form = e.target;
    const data = new URLSearchParams(new FormData(form).entries());

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        setSent(true);
      } else if (
        this.readyState === XMLHttpRequest.DONE &&
        this.status === 500
      ) {
        setError(true);
      }
    };

    xhr.send(data);
    return false;
  };

  return { submitForm, sent, error, mailApiUrl };
};

export const Call = () => {
  const { submitForm, sent, error, mailApiUrl } = useContactForm();

  return (
    <div>
      <div className={sent ? '' : 'hidden'}>
        <span className="flex text-white tracking-wider 2xl:ml-30 mt-12 text-lg xl:mb-15">
          Takk for din henvendelse. Du hører fra oss snart.
        </span>
      </div>
      <div className={sent ? 'hidden' : ''}>
        <form
          className="text-white w-full tracking-wider text-mobile"
          method="POST"
          action={mailApiUrl}
          onSubmit={submitForm}
        >
          <input
            type="hidden"
            name="subject"
            value="Kontaktskjema: Ring meg tilbake"
          />
          <label className="mb-5">Ditt navn*</label>
          <div className="flex my-5">
            <input
              type="text"
              className="flex-initial mr-2 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md"
              placeholder="Fornavn"
              name="firstname"
              required
            />
            <input
              type="text"
              className="flex-initial ml-2 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md"
              placeholder="Etternavn"
              name="lastname"
              required
            />
          </div>
          <label className="my-5">Telefon*</label>
          <div className="my-5">
            <input
              type="number"
              className="focus:outline-none bg-transparent border rounded-sm h-10 p-4 w-full rounded-md"
              placeholder="Eg. +00 000 00 000"
              name="phone"
              required
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="uppercase font-semibold h-10 bg-darkblue px-20 mx-auto rounded-full focus:outline-none"
              type="submit"
              aria-label="Send"
            >
              Send inn
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <span id="error-message" className={error ? '' : 'hidden'}>
              Beklager, det oppstod en feil.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Offer = ({ compact = false, sendButtonTransparent = false }) => {
  const { submitForm, sent, error, mailApiUrl } = useContactForm();
  const marginClass = compact ? 'mb-4' : 'my-5';
  const buttonClass =
    'uppercase font-semibold h-10 bg-darkblue px-20 mx-auto rounded-full focus:outline-none';
  const transparentButtonClass =
    'rounded-full border border-white py-2 px-20 uppercase px-8 my-1 hover:border-theme-accent';

  const buttonClasses = sendButtonTransparent
    ? transparentButtonClass
    : buttonClass;

  const nameInputClasses = `flex-1 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md ${
    compact ? 'w-44' : 'w-fit'
  }`;
  return (
    <div className="">
      <div className={sent ? '' : 'hidden'}>
        <span className="flex text-white tracking-wider 2xl:ml-30 mt-12 text-lg xl:mb-15">
          Takk for din henvendelse. Du hører fra oss snart.
        </span>
      </div>
      <div className={sent ? 'hidden' : ''}>
        <form
          className="text-white w-full tracking-wider text-mobile"
          method="POST"
          action={mailApiUrl}
          onSubmit={submitForm}
        >
          <input
            type="hidden"
            name="subject"
            value="Kontaktskjema: Gi meg et tilbud"
          />
          <label className="mb-5">Ditt navn*</label>
          <div className={`flex gap-x-2 ${marginClass}`}>
            <input
              type="text"
              className={nameInputClasses}
              placeholder="Fornavn"
              name="firstname"
              required
            />
            <input
              type="text"
              className={nameInputClasses}
              placeholder="Etternavn"
              name="lastname"
              required
            />
          </div>
          <label className="my-5">E-post*</label>
          <div className={marginClass}>
            <input
              type="email"
              className="focus:outline-none bg-transparent border rounded-sm h-10 p-4 w-full rounded-md"
              placeholder="Eg. example@gmail.com"
              name="email"
              required
            />
          </div>
          <label className="my-5">Beskjed*</label>
          <div className={marginClass}>
            <textarea
              type="text"
              className="focus:outline-none bg-transparent border rounded-sm p-4 w-full rounded-md"
              placeholder="Skriv meldingen din her"
              rows={compact ? 2 : 4}
              name="text"
              required
            />
          </div>
          <label className="my-5">Telefon</label>
          <div className={marginClass}>
            <input
              type="text"
              className="focus:outline-none bg-transparent border rounded-sm h-10 p-4 w-full rounded-md"
              placeholder="Eg. +00 000 00 000"
              name="phone"
            />
          </div>
          <div className="flex justify-center mt-10">
            <button className={buttonClasses} type="submit" aria-label="Send">
              Send inn
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <span id="error-message" className={error ? '' : 'hidden'}>
              Beklager, det oppstod en feil.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Visit = ({ address, org, phone, email, hours, title, text }) => (
  <div>
    <div className="filter-grayscale">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0959165114027!2d10.747489116095961!3d59.913955481867234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e62391dd685%3A0xf8f6a5db4daeb1db!2sPl%C3%B8ens%20Gate%201%2C%200181%20Oslo!5e0!3m2!1sen!2sno!4v1612259695181!5m2!1sen!2sno"
        className="w-full sm:mx-0"
        height="384"
        title="map"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullscreen=""
        ariaHidden="false"
        tabIndex="0"
      ></iframe>
    </div>
    <div className="sm:px-8 mt-15 mb-8">
      <h4 className="text-lg font-semibold mb-1 uppercase">{title}</h4>
      <p className="text-mobile leading-relaxed font-light">{text}</p>
    </div>
    <div className="sm:grid grid-cols-2 gap-y-10">
      {address && (
        <div className="sm:px-8 mb-5 sm:mb-0">
          <h4 className="text-lg font-semibold mb-1 uppercase">ADRESSE</h4>
          <p className="text-mobile leading-relaxed font-light">{address}</p>
        </div>
      )}
      {org && (
        <div className="sm:px-8">
          <h4 className="text-lg font-semibold mb-1 uppercase">ORG. NR.</h4>
          <p className="text-mobile leading-relaxed font-light">{org}</p>
        </div>
      )}
      {phone && (
        <div className="sm:px-8 mb-5">
          <h4 className="text-lg font-semibold mb-1 uppercase">Telefon</h4>
          <p className="text-mobile leading-relaxed font-light">{phone}</p>
        </div>
      )}
      {email && (
        <div className="sm:px-8 mb-5">
          <h4 className="text-lg font-semibold mb-1 uppercase">Email</h4>
          <p className="text-mobile leading-relaxed font-light">{email}</p>
        </div>
      )}
      {hours && (
        <div className="sm:px-8">
          <h4 className="text-lg font-semibold mb-1 uppercase">Arbeidstid</h4>
          <p className="text-mobile leading-relaxed font-light">{hours}</p>
        </div>
      )}
    </div>
  </div>
);
