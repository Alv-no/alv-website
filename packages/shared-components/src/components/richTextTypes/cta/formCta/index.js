import React, { useState } from "react";
import { createFormData, submitWithDelay, useForm } from "../../../../utils";
import { FormFeedbackWrapper } from "../../../formFeedbackWrapper";
import * as styles from "./FormCta.module.css";
import { trackCustomEvent } from "../../../../utils/plausible";

const FormCta = ({ identifier, eyebrow, heading, whiteOnBlue }) => {
  const themeClass = whiteOnBlue ? styles.whiteOnBlue : styles.blueOnWhite;
  const paddingClass = heading.trim()
    ? styles.verticalPadding
    : styles.noVerticalPadding;

  return (
    <section className={`${styles.container} ${paddingClass} ${themeClass}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h3 className={styles.heading}>{heading}</h3>
      <Form identifier={identifier} />
    </section>
  );
};

const Form = ({ identifier }) => {
  const [status, setStatus] = useState("validating");
  const [inputValues, handleInputChange] = useForm({
    subject: `Form-Cta - ${identifier}`,
    firstname: "",
    lastname: "",
    email: "",
    body: "",
  });

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    setStatus("loading");

    trackCustomEvent("Block Form", { identifier });

    const formData = createFormData(inputValues);

    const mailApiUrl = `${window.location.protocol}//mail-api.${window.location.hostname}/send`;
    const submissionResponse = await submitWithDelay(mailApiUrl, formData);

    setStatus(submissionResponse);
  };

  return (
    <FormFeedbackWrapper status={status}>
      <form className={styles.form} onSubmit={handleSubmitClick}>
        <div className="">
          <FormLabel>Fornavn *</FormLabel>
          <input
            className={styles.input}
            value={inputValues.firstname}
            onChange={handleInputChange}
            name="firstname"
            type="text"
            required
          />
        </div>
        <div className="">
          <FormLabel>Etternavn *</FormLabel>
          <input
            className={styles.input}
            value={inputValues.lastname}
            onChange={handleInputChange}
            name="lastname"
            type="text"
            required
          />
        </div>
        <div className={styles.textareaWrapper}>
          <FormLabel>E-post *</FormLabel>
          <input
            className={styles.input}
            value={inputValues.email}
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
            value={inputValues.body}
            onChange={handleInputChange}
            name="body"
            rows="4"
          />
        </div>
        <SubmitButton />
      </form>
    </FormFeedbackWrapper>
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

const FormLabel = ({ children }) => (
  <label className="mb-2 block">{children}</label>
);

export default FormCta;
