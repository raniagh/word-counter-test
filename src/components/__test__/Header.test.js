import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Test Header component", () => {
  test("render the heading text", () => {
    render(<Header heading="Word Counter" />);
    const heading = screen.getByTestId("heading");
    expect(heading.innerHTML).toBe("Word Counter");
  });

  test("render the subHeading text", () => {
    render(<Header subHeading="Free online character and word count tool." />);
    const subHeading = screen.getByTestId("subHeading");
    expect(subHeading.innerHTML).toBe(
      "Free online character and word count tool."
    );
  });
});
