import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CallToAction from '.';

describe('CallToAction-component', () => {
  it('should render', () => {
    render(<CallToAction>Hello Button</CallToAction>);
    expect(
      screen.getByRole('button', { name: /Hello Button/ })
    ).toBeInTheDocument();
  });

  it('onClick should fire when clicking the button', () => {
    const mockCallBack = jest.fn();
    render(<CallToAction onClick={mockCallBack} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('onClick should not fire when clicking the button while disabled', () => {
    const mockCallBack = jest.fn();
    render(<CallToAction disabled={true} onClick={mockCallBack} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
