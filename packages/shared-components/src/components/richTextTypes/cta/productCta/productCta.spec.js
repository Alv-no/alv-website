import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ProductCta from ".";

describe("mailApiButton-component", () => {
  it("should render", async () => {
    const handleEmailSubmit = jest.fn();
    render(
      <ProductCta
        handleEmailSubmit={handleEmailSubmit}
        productName="product a"
        buttonText="button text here..."
      />,
    );
    expect(screen.getByTestId("mail-reveal-btn")).toBeInTheDocument();
    fireEvent(
      screen.getByTestId("mail-reveal-btn"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(screen.getByTestId("mail-submit-btn")).toBeInTheDocument();
    expect(handleEmailSubmit).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId("mail-submit-btn"));
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
