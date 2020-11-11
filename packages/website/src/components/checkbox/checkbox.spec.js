import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from '.';

describe('Checkbox-component', () => {
  it('should render', () => {
    render(<Checkbox>Hello Checkbox</Checkbox>);
    expect(
      screen.getByRole('checkbox', { name: /Hello Checkbox/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /Hello Checkbox/ }).checked
    ).toEqual(false);
  });

  it('with defaultValue should render as checked', () => {
    render(<Checkbox defaultValue={true}>Hello Checkbox</Checkbox>);
    expect(
      screen.getByRole('checkbox', { name: /Hello Checkbox/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /Hello Checkbox/ }).checked
    ).toEqual(true);
  });

  it('onChange should fire when clickking the checkbox', () => {
    const mockCallBack = jest.fn();
    render(<Checkbox onChange={mockCallBack}>Hello Checkbox</Checkbox>);

    fireEvent.click(screen.getByRole('checkbox', { name: /Hello Checkbox/ }));
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
