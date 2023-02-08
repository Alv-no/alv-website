import React from 'react';

export const FormFeedbackWrapper = ({
  status,
  loadingMsg = 'Laster...',
  successMsg = 'Innsendingen var vellykket. Takk!',
  errorMsg = 'Ops! Det har oppstått en feil. Prøv igjen.',
  children,
}) => {
  const colorMapper = {
    success: 'bg-green-100  border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    loading: 'bg-gray-100 border-gray-400 text-gray-700',
  };

  const msgMapper = {
    success: successMsg,
    error: errorMsg,
    loading: loadingMsg,
  };

  // if status is not one of the three valid states, return children
  if (!['success', 'error', 'loading'].includes(status)) {
    return children;
  }

  return (
    <div
      className={'border px-4 py-3 rounded relative ' + colorMapper[status]}
      role="alert"
      data-testid="feedback-msg"
    >
      <strong className="font-bold">{msgMapper[status]}</strong>
    </div>
  );
};
