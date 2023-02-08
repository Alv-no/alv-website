import React, { useEffect, useRef, useState } from 'react';
import LoadingSpinner from '../../../loadingSpinner';
import { handleEmailSubmit } from './../../../../utils';

const ProductCta = ({ productName, buttonText }) => {
  const [showInput, setShowInput] = useState(false);

  const [buttonWidth, setButtonWidth] = useState(null);
  const [status, setStatus] = useState('validating');

  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleRevealInput = () => {
    setStatus('validating');
    setShowInput(true);
  };

  // Set initial width to facilitate for transition effect
  useEffect(() => {
    if (buttonRef) {
      setButtonWidth(buttonRef.current.offsetWidth + 'px');
    }
  }, [productName]);

  useEffect(() => {
    if (!showInput && buttonWidth) {
      buttonRef.current.style.width = buttonWidth;
    }
    if (showInput && buttonWidth) {
      buttonRef.current.style.width = '330px';
      inputRef.current.focus();
    }
  }, [buttonWidth, showInput]);

  return (
    <div className="my-6">
      <div className="relative inline-block">
        <RevealButton
          buttonText={buttonText}
          handleRevealInput={handleRevealInput}
          showInput={showInput}
          buttonRef={buttonRef}
        />
        <EmailForm
          handleEmailSubmit={handleEmailSubmit}
          inputRef={inputRef}
          showInput={showInput}
          setStatus={setStatus}
          status={status}
        />
        <FeedbackOverlay status={status} />
      </div>
    </div>
  );
};

const EmailForm = ({
  inputRef,
  showInput,
  productName,
  handleEmailSubmit,
  setStatus,
  status,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    setStatus('loading');
    const response = await handleEmailSubmit(productName, email);

    // Adding delay for better UX
    setTimeout(() => {
      response?.status === 200 ? setStatus('success') : setStatus('error');
    }, 400);
  };

  return (
    <form onSubmit={handleSubmitClick}>
      <input
        ref={inputRef}
        className={`absolute left-0 bg-none bottom-1/2 transform pl-8 translate-y-1/2 w-72 focus:outline-none ${
          !showInput && 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'none' }}
        placeholder="Enter your email here..."
        value={email}
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <div
        className={`absolute right-0 bottom-1/2 transform translate-y-1/2 w-18 bg-navy rounded-r-full h-full flex items-center transition duration-500 opacity-0 ${
          showInput ? 'opacity-100' : 'pointer-events-none'
        }`}
      >
        {status === 'loading' && (
          <div
            className="flex justify-center items-center ml-5"
            data-testid="loading-spinner"
          >
            <LoadingSpinner />
          </div>
        )}
        {status === 'validating' && (
          <button
            data-testid="mail-submit-btn"
            type="submit"
            className="text-white focus:outline-none -ml-2px w-full h-full"
          >
            SEND
          </button>
        )}
      </div>
    </form>
  );
};

const FeedbackOverlay = ({ status }) => {
  const statusMsgMapper = {
    success: "Thanks! We'll be in touch.",
    error: 'Oops! Something went wrong.',
  };
  const styleMapper = {
    success: 'opacity-100 bg-navy',
    error: 'opacity-100 bg-red-700',
    loading: 'opacity-0 pointer-events-none',
    validating: 'opacity-0 pointer-events-none',
  };
  return (
    <div
      className={`${styleMapper[status]} absolute h-full w-full top-0 z-20 rounded-full text-white flex items-center justify-center font-bold transition duration-300`}
    >
      {statusMsgMapper[status]}
    </div>
  );
};

const RevealButton = ({
  buttonText,
  handleRevealInput,
  showInput,
  buttonRef,
}) => {
  return (
    <button
      data-testid="mail-reveal-btn"
      ref={buttonRef}
      className={`uppercase tracking-wider text-base px-8 py-6px text-navy border border-navy rounded-full font-semibold focus:outline-none ease-all transition duration-500 ease-all ${
        showInput && 'pointer-events-none'
      }`}
      style={{
        borderWidth: '2px',
        transition: '0.5s ease all',
        height: '42px',
      }}
      onClick={handleRevealInput}
      aria-label={buttonText}
    >
      <span
        className={`transition duration-500 whitespace-nowrap valid:text-green invalid:text-red ${
          showInput && 'opacity-0 '
        } h-full`}
      >
        {buttonText.en}
      </span>
    </button>
  );
};

export default ProductCta;
