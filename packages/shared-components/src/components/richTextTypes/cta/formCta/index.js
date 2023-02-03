import React, { useState } from 'react';
import * as styles from './FormCta.module.css';

const FormCta = ({ identifier, eyebrow, heading, whiteOnBlue }) => {
  const themeClass = whiteOnBlue ? styles.whiteOnBlue : styles.blueOnWhite;

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h3 className={styles.heading}>{heading}</h3>
      <Form identifier={identifier} />
    </section>
  );
};

const Form = ({ identifier }) => {
  const [status, setStatus] = useState('validating');
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    body: '',
  });

  const handleInputChange = (event) => {
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailApiUrl = `${window.location.protocol}//mail-api.${window.location.hostname}/send`;
    const { name, email, body } = formInputs;

    const formData = new FormData();

    formData.append('subject', 'Form-Cta - ' + identifier);
    name && formData.append('name', name);
    email && formData.append('email', email);
    body && formData.append('body', body);

    setStatus('loading');

    fetch(mailApiUrl, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setTimeout(() => {
          setStatus('success');
        }, 400);
      })
      .catch(() => {
        setTimeout(() => {
          setStatus('error');
        }, 400);
      });
  };

  if (status === 'success') {
    return <FeedbackMsg msg="Vellykket. Takk for din søknad!" color="green" />;
  }

  if (status === 'error') {
    return (
      <FeedbackMsg
        msg="Ops! Det har oppstått en feil. Prøv igjen."
        color="red"
      />
    );
  }

  if (status === 'loading') {
    return <FeedbackMsg msg="Laster..." color="gray" />;
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="">
        <FormLabel>Navn</FormLabel>
        <input
          className={styles.input}
          value={formInputs.name}
          onChange={handleInputChange}
          name="name"
          type="text"
          required
        />
      </div>
      <div>
        <FormLabel>E-post</FormLabel>
        <input
          className={styles.input}
          value={formInputs.email}
          onChange={handleInputChange}
          name="email"
          type="email"
          required
        />
      </div>
      <div className={styles.textareaWrapper}>
        <FormLabel>Beskrivelse av virksomheten</FormLabel>
        <textarea
          className={styles.input}
          value={formInputs.body}
          onChange={handleInputChange}
          name="body"
          rows="4"
        />
      </div>
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => (
  <button
    type="submit"
    className="block bg-navy py-2 px-4 rounded-full uppercase text-white font-bold tracking-wider hover:bg-yellow hover:text-navy mr-auto w-full xs:w-auto"
  >
    Send inn
  </button>
);

const FeedbackMsg = ({ msg, color }) => {
  const colorMapper = {
    green: 'bg-green-100  border-green-400 text-green-700',
    red: 'bg-red-100 border-red-400 text-red-700',
    gray: 'bg-gray-100 border-gray-400 text-gray-700',
  };

  return (
    <div
      className={'border px-4 py-3 rounded relative ' + colorMapper[color]}
      role="alert"
      data-testid="feedback-msg"
    >
      <strong className="font-bold">{msg}</strong>
    </div>
  );
};

const FormLabel = ({ children }) => (
  <label className="mb-2 block">{children}</label>
);

export default FormCta;
