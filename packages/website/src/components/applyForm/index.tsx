import React, { useRef, useState } from 'react';
import { MdDelete, MdUpload } from 'react-icons/md';

interface TextInputsProps {
  name?: string;
  email?: string;
}

const ApplyForm = ({ jobTitle }: { jobTitle: string }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [formInputs, setFormInputs] = useState<TextInputsProps>({
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    fetch('http://localhost:80/jobApplication/send', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form className="grid" onSubmit={handleSubmit}>
      <label className="mb-2">Navn *</label>
      <input
        className={
          'rounded border border-px border-navy bg-transparent h-11 pl-3 mb-3'
        }
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
        onChange={handleInputChange}
        required
        name="email"
        value={formInputs.email}
        type="email"
      />

      <UploadAttachments files={files} setFiles={setFiles} />
      <button
        type="submit"
        className="mt-4 bg-navy py-2 px-14 rounded-full uppercase text-white font-bold tracking-wider hover:bg-yellow hover:text-navy mx-auto w-full xs:w-auto"
      >
        Send inn
      </button>
    </form>
  );
};

interface UploadAttachmentsProps {
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
}

const UploadAttachments = ({ files, setFiles }: UploadAttachmentsProps) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

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

export default ApplyForm;
