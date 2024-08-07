import React, { useState, useEffect } from "react";
import { trackCustomEvent } from "shared-components";
import { PLAUSIBLE_WORK_FOR_US_FORM } from "../../plausible/plausible-events";

const ApplyForm = ({ jobTitle }) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [status, setStatus] = useState("validating");
  const [privacyApproval, setPrivacyApproval] = useState(false);
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const formValid =
      formInputs.firstName?.length > 0 &&
      formInputs.lastName?.length > 0 &&
      formInputs.email?.length > 0;
    let fileValid = true;

    setCanSubmit(formValid && fileValid && privacyApproval);
  }, [privacyApproval, formInputs]);

  const handleInputChange = (event) => {
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailApiUrl = `${window.location.protocol}//mail-api.${window.location.hostname}/jobApplication/send`;
    const { firstName, lastName, email } = formInputs;
    const name = `${firstName} ${lastName}`; // TODO: update backend to handle first and last name separately

    const formData = new FormData();

    trackCustomEvent(PLAUSIBLE_WORK_FOR_US_FORM, { title: jobTitle });

    formData.append("subject", "Jobbsøknad - " + jobTitle);
    name && formData.append("name", name);
    email && formData.append("email", email);

    setStatus("loading");

    fetch(mailApiUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        setTimeout(() => {
          if (res.status === 200) {
            setStatus("success");
          } else {
            setStatus("error");
          }
        }, 400);
      })
      .catch(() => {
        setTimeout(() => {
          setStatus("error");
        }, 400);
      });
  };

  if (status === "success") {
    return <FeedbackMsg msg="Vellykket. Takk for din søknad!" color="green" />;
  }

  if (status === "error") {
    return (
      <FeedbackMsg
        msg="Ops! Det har oppstått en feil. Prøv igjen."
        color="red"
      />
    );
  }

  if (status === "loading") {
    return <FeedbackMsg msg="Laster..." color="gray" />;
  }

  return (
    <form className="grid" onSubmit={handleSubmit} data-testid="form">
      <label className="mb-2">Fornavn *</label>
      <input
        className={
          "rounded border border-px border-navy bg-transparent h-11 pl-3 mb-3"
        }
        data-testid="first-name-input"
        name="firstName"
        value={formInputs.firstName}
        onChange={handleInputChange}
        type="text"
        required
      />
      <label className="mb-2">Etternavn *</label>
      <input
        className={
          "rounded border border-px border-navy bg-transparent h-11 pl-3 mb-3"
        }
        data-testid="last-name-input"
        name="lastName"
        value={formInputs.lastName}
        onChange={handleInputChange}
        type="text"
        required
      />
      <label className="mb-2">E-post *</label>
      <input
        className={
          "rounded border border-px border-navy bg-transparent h-11 pl-3 mb-3"
        }
        data-testid="email-input"
        onChange={handleInputChange}
        required
        name="email"
        value={formInputs.email}
        type="email"
      />
      <PrivacyAgreement
        privacyApproval={privacyApproval}
        setPrivacyApproval={setPrivacyApproval}
      />
      <SubmitButton disabled={!canSubmit} />
    </form>
  );
};

export const PrivacyAgreement = ({ privacyApproval, setPrivacyApproval }) => {
  return (
    <div className="mt-2">
      <input
        className="mr-2"
        data-testid="privacy-approval-input"
        onChange={() => setPrivacyApproval(!privacyApproval)}
        checked={privacyApproval}
        required
        name="privacy-approval"
        type="checkbox"
      />
      <a
        href="https://alv.no/om-oss/personvernerklaering"
        className="mb-2 underline"
      >
        Jeg har lest og akseptert vilkårene
      </a>
    </div>
  );
};

const SubmitButton = ({ disabled }) => (
  <button
    disabled={disabled}
    type="submit"
    data-testid="submit-btn"
    className={
      disabled
        ? "mt-4 opacity-50 bg-navy py-2 px-14 rounded-full uppercase text-white font-bold tracking-wider mx-auto w-full xs:w-auto"
        : "mt-4 bg-navy py-2 px-14 rounded-full uppercase text-white font-bold tracking-wider hover:bg-yellow hover:text-navy mx-auto w-full xs:w-auto"
    }
  >
    Send inn
  </button>
);

const FeedbackMsg = ({ msg, color }) => {
  const colorMapper = {
    green: "bg-green-100  border-green-400 text-green-700",
    red: "bg-red-100 border-red-400 text-red-700",
    gray: "bg-gray-100 border-gray-400 text-gray-700",
  };

  return (
    <div
      className={"border px-4 py-3 rounded relative " + colorMapper[color]}
      role="alert"
      data-testid="feedback-msg"
    >
      <strong className="font-bold">{msg}</strong>
    </div>
  );
};

export default ApplyForm;
