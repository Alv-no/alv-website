import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ApplyForm from ".";

jest.mock("shared-components", () => ({
  generatePlausibleClass: () => "",
}));

describe("applyForm-component", () => {
  render(<ApplyForm jobTitle="Utvikler" />);

  const firstnameInputEl = screen.getByTestId("first-name-input");
  const lastnameInputEl = screen.getByTestId("last-name-input");
  const emailInputEl = screen.getByTestId("email-input");
  const privacyApprovalInput = screen.getByTestId("privacy-approval-input");
  const submitBtnEl = screen.getByTestId("submit-btn");
  const formEl = screen.getByTestId("form");

  it("should render form elements", () => {
    expect(firstnameInputEl).toBeInTheDocument();
    expect(lastnameInputEl).toBeInTheDocument();
    expect(emailInputEl).toBeInTheDocument();
    expect(privacyApprovalInput).toBeInTheDocument();
    expect(submitBtnEl).toBeInTheDocument();
  });

  it("should successfully submit with name and email", async () => {
    fireEvent.change(firstnameInputEl, { target: { value: "test" } });
    fireEvent.change(lastnameInputEl, { target: { value: "name" } });
    fireEvent.change(emailInputEl, { target: { value: "test@hey.com" } });
    fireEvent.change(privacyApprovalInput, { target: { checked: true }});

    expect(formEl).toBeValid();
  });
});
