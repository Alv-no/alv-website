import React, { useRef, useState } from 'react';
import { MdDelete, MdUpload } from 'react-icons/md';

const ApplyForm = ({ jobTitle }) => {
  const [status, setStatus] = useState('validating');
  const [files, setFiles] = useState(null);
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailApiUrl = `${window.location.protocol}//mail-api.${window.location.hostname}/jobApplication/send`;

    const { name, email } = formInputs;

    const formData = new FormData();

    formData.append('subject', 'Jobbsøknad - ' + jobTitle);
    name && formData.append('name', name);
    email && formData.append('email', email);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
    }

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
    <form className="grid" onSubmit={handleSubmit}>
      <label className="mb-2">Navn *</label>
      <input
        className={
          'rounded border border-px border-navy bg-transparent h-11 pl-3 mb-3'
        }
        data-testid="name-input"
        name="name"
        value={formInputs.name}
        onChange={handleInputChange}
        type="text"
        required
      />
      <label className="mb-2">E-post *</label>
      <input
        className={
          'rounded border border-px border-navy bg-transparent h-11 pl-3 mb-3'
        }
        data-testid="email-input"
        onChange={handleInputChange}
        required
        name="email"
        value={formInputs.email}
        type="email"
      />
      <UploadAttachments files={files} setFiles={setFiles} />
      <SubmitButton />
    </form>
  );
};

const UploadAttachments = (props) => {
  const { files, setFiles } = props;
  const hiddenFileInput = useRef(null);

  const handleInputClick = () => {
    if (hiddenFileInput.current) hiddenFileInput.current.click();
  };

  const handleRemoveFiles = () => {
    setFiles(null);
  };

  return (
    <div className="mt-2 relative inline-block">
      <button
        className="font-bold tracking-wider mx-auto hover:cursor-pointer z-10 relative"
        onClick={files ? handleRemoveFiles : handleInputClick}
        type="button"
      >
        <span className="flex items-center">
          {files ? (
            <>
              Fjern vedlegg <MdDelete className="mt-2px ml-2px" size="20" />
            </>
          ) : (
            <>
              Last opp <MdUpload className="mt-1 ml-2px" size="20" />
            </>
          )}
        </span>
        <span className="block h-2px w-full bg-navy" />
      </button>
      <input
        multiple
        type="file"
        name="files"
        data-testid="file-upload"
        ref={hiddenFileInput}
        onChange={(e) => setFiles(e.target.files)}
        className="opacity-0 border absolute left-0 w-24"
      />
      <ul className="pl-1 mt-2">
        {files &&
          Array.from(files).map((file, i) => (
            <li key={`file-${i}`} className="flex gap-1">
              <span className="">{file.name}</span>
              <span className="text-sm mt-1 ml-1 opacity-50">
                ({Math.round(file.size / 1000)}kb)
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

const SubmitButton = () => (
  <button
    type="submit"
    data-testid="submit-btn"
    className="mt-4 bg-navy py-2 px-14 rounded-full uppercase text-white font-bold tracking-wider hover:bg-yellow hover:text-navy mx-auto w-full xs:w-auto"
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

export default ApplyForm;
