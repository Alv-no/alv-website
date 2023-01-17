import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ApplyForm from '.';

describe('applyForm-component', () => {
  render(<ApplyForm jobTitle="Utvikler" />);

  const nameInputEl = screen.getByTestId('name-input');
  const emailInputEl = screen.getByTestId('email-input');
  const submitBtnEl = screen.getByTestId('submit-btn');
  const formEl = screen.getByTestId('form');

  it('should render form elements', () => {
    expect(nameInputEl).toBeInTheDocument();
    expect(emailInputEl).toBeInTheDocument();
    expect(submitBtnEl).toBeInTheDocument();
  });

  it('should successfully submit with name and email', async () => {
    fireEvent.change(nameInputEl, { target: { value: 'test' } });
    fireEvent.change(emailInputEl, { target: { value: 'test@hey.com' } });

    expect(formEl).toBeValid();
  });
});
