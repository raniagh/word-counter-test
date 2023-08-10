import { render, screen } from "@testing-library/react";
import { PageNotFound } from "../PageNotFound";
import { BrowserRouter } from "react-router-dom";

describe("Test PageNotFound", () => {
  test("render text and image", () => {
    render(<PageNotFound />, { wrapper: BrowserRouter });
    const pnfText = screen.getByTestId("pnfText");
    const pnfImage = screen.getByAltText("Page Not Found");

    expect(pnfText.innerHTML).toBe("Oops - Page Not Found!");
    expect(pnfImage).toBeTruthy();
  });
});
