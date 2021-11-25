import React, { useState } from 'react';
import * as Icon from '../icon';

const useContactForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const mailApiUrl = process.env.MAIL_API || 'http://mail-api.localhost/send';

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
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState('Jeg er en kunde');
  const { submitForm, sent, error, mailApiUrl } = useContactForm();

  const onClick = (e) => {
    setDropdown(e.target.id);
    setOpen(false);
  };

  const dropdownOptions = ['Jeg er en kunde', 'Jeg er en ansatt'];

  return (
    <div className="">
      <form
        className="text-white w-full tracking-wider text-mobile"
        method="POST"
        action={mailApiUrl}
        onSubmit={submitForm}
      >
        {/* DROPDOWN */}
        <label>Er du en kunde eller en ansatt?</label>
        <div className="my-5 relative">
          <button
            className="border rounded-sm h-10 p-4 w-full rounded-md relative flex items-center cursor-pointer focus:outline-none"
            onClick={() => setOpen(!open)}
            type="button"
            aria-label="Toggle open"
          >
            <span className={`${open && 'font-semibold'}`}>{dropdown}</span>
            <span className="transform rotate-90 scale-60 translate-y-2px -translate-x-4 absolute right-0">
              <Icon.ContactArrow />
            </span>
          </button>
          <div
            className={`absolute ${
              open ? 'block' : 'hidden'
            } inset-x-0 rounded-t-none transform -translate-y-1 bg-navy border border-white z-20 border-t-0 shadow-lg`}
          >
            <ul className="pb-2 bg-lightblue">
              {dropdownOptions.map((el) => (
                <li
                  onClick={onClick}
                  className="px-4 py-1 cursor-pointer"
                  id={el}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <input
          type="hidden"
          name="subject"
          value="Kontaktskjema: Ring meg tilbake"
        />
        <label className="mb-5">Ditt navn*</label>
        <div className="flex my-5">
          <input
            type="text"
            className="flex-1 mr-2 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md"
            placeholder="Fornavn"
            name="firstname"
            required
          />
          <input
            type="text"
            className="flex-1 ml-2 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md"
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
        {/* <p className="font-light text-sm leading-loose">
          Ved å utfylle denne formen, bekrefter jeg å ha lest og forstått våre{' '}
          <Link to="/kontakt-oss">
            <span className="font-semibold hover:text-theme-accent duration-300 transition cursor-pointer">
              vedtekter
            </span>
          </Link>{' '}
          og{' '}
          <Link to="/kontakt-oss">
            <span className="font-semibold  hover:text-theme-accent duration-300 transition cursor-pointer">
              personvernsregler
            </span>
          </Link>
          .
          </p> */}
        <div className="flex justify-center mt-10">
          <button
            className="uppercase font-semibold h-10 bg-darkblue px-20 mx-auto rounded-full focus:outline-none"
            type="submit"
            aria-label="Send"
          >
            {sent ? 'Takk for din henvendelse' : 'Send inn'}
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <span id="error-message" className={error ? '' : 'hidden'}>
            Beklager, det oppstod en feil.
          </span>
        </div>
      </form>
    </div>
  );
};

export const Offer = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState('Jeg er en kunde');
  const { submitForm, sent, error, mailApiUrl } = useContactForm();

  const onClick = (e) => {
    setDropdown(e.target.id);
    setOpen(false);
  };

  const dropdownOptions = ['Jeg er en kunde', 'Jeg er en ansatt'];

  return (
    <form
      className="text-white w-full tracking-wider text-mobile"
      method="POST"
      action={mailApiUrl}
      onSubmit={submitForm}
    >
      {/* DROPDOWN */}
      <label>Er du en kunde eller en ansatt?</label>
      <div className="my-5 relative">
        <button
          className="border rounded-sm h-10 p-4 w-full rounded-md relative flex items-center cursor-pointer focus:outline-none"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Toggle Open"
        >
          <span className={`${open && 'font-semibold'}`}>{dropdown}</span>
          <span className="transform rotate-90 scale-60 translate-y-2px -translate-x-4 absolute right-0">
            <Icon.ContactArrow />
          </span>
        </button>
        <div
          className={`absolute ${
            open ? 'block' : 'hidden'
          } inset-x-0 rounded-md rounded-t-none transform -translate-y-1 bg-navy border border-white border-t-0`}
        >
          <ul className="pb-2 bg-lightblue">
            {dropdownOptions.map((el) => (
              <li
                onClick={onClick}
                className="px-4 py-1 cursor-pointer"
                id={el}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <input
        type="hidden"
        name="subject"
        value="Kontaktskjema: Gi meg et tilbud"
      />
      <label className="mb-5">Ditt navn*</label>
      <div className="flex my-5">
        <input
          type="text"
          className="flex-1 mr-2 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md"
          placeholder="Fornavn"
          name="firstname"
          required
        />
        <input
          type="text"
          className="flex-1 ml-2 focus:outline-none bg-transparent border rounded-sm h-10 p-4 rounded-md"
          placeholder="Etternavn"
          name="lastname"
          required
        />
      </div>
      <label className="my-5">E-post*</label>
      <div className="my-5">
        <input
          type="email"
          className="focus:outline-none bg-transparent border rounded-sm h-10 p-4 w-full rounded-md"
          placeholder="Eg. example@gmail.com"
          name="email"
          required
        />
      </div>
      <label className="my-5">Beskjed*</label>
      <div className="my-5">
        <textarea
          type="text"
          className="focus:outline-none bg-transparent border rounded-sm p-4 w-full rounded-md"
          placeholder="Skriv meldingen din her"
          rows="4"
          name="text"
          required
        />
      </div>
      <label className="my-5">Telefon</label>
      <div className="my-5">
        <input
          type="text"
          className="focus:outline-none bg-transparent border rounded-sm h-10 p-4 w-full rounded-md"
          placeholder="Eg. +00 000 00 000"
          name="phone"
        />
      </div>
      {/* <p className="font-light text-sm leading-loose">
        Ved å utfylle denne formen, bekrefter jeg å ha lest og forstått
        gjeldende{' '}
        <Link to="/kontakt-oss">
          <span className="font-semibold hover:text-theme-accent duration-300 transition cursor-pointer">
            vedtekter
          </span>
        </Link>{' '}
        og{' '}
        <Link to="/kontakt-oss">
          <span className="font-semibold  hover:text-theme-accent duration-300 transition cursor-pointer">
            personvernsregler
          </span>
        </Link>
        .
      </p> */}
      <div className="flex justify-center mt-10">
        <button
          className="uppercase font-semibold h-10 bg-darkblue px-20 mx-auto rounded-full focus:outline-none"
          type="submit"
          aria-label="Send"
        >
          {sent ? 'Takk for din henvendelse' : 'Send inn'}
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <span id="error-message" className={error ? '' : 'hidden'}>
          Beklager, det oppstod en feil.
        </span>
      </div>
    </form>
  );
};

export const Visit = ({ address, org, phone, email, hours }) => (
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
      <h4 className="text-lg font-semibold mb-1 uppercase">
        Ta en tur innom oss!
      </h4>
      <p className="text-mobile leading-relaxed font-light">
        Vi tar gjerne en kaffe, enten du er potensiell ansatt, eller interessert
        i hva vi driver med. Vi håper å se deg.
      </p>
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
