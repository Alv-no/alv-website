import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductCta } from '.';

describe('mailApiButton-component', () => {
  it('should render', () => {
    const handleEmailSubmit = jest.fn();
    render(
      <ProductCta
        handleEmailSubmit={handleEmailSubmit}
        productName="product a"
        buttonText="button text here..."
      >
        Children
      </ProductCta>
    );
    expect(screen.getByTestId('mail-reveal-btn')).toBeInTheDocument();
    fireEvent(
      screen.getByTestId('mail-reveal-btn'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId('mail-submit-btn')).toBeInTheDocument();
    expect(handleEmailSubmit).toHaveBeenCalledTimes(0);
    fireEvent(
      screen.getByTestId('mail-submit-btn'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(handleEmailSubmit).toHaveBeenCalledTimes(1);
  });
});
