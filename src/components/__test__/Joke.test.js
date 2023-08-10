import { render, screen, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe("Test Joke component", () => {
  test("render joke", async () => {
    render(<Joke />);
    const jokeHeadline = screen.getByTestId("jokeHeadline");
    await waitFor(() => expect(jokeHeadline.innerHTML).toBeTruthy());
  });
});
