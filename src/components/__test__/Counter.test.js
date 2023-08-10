import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../Counter";
import userEvent from "@testing-library/user-event";

//we use describe to group tests
describe("Counter Component test", () => {
  /* check if the textarea is rendering or not
test take two arguments
1. name should be a string
2. a callback function that contain the testing part */
  test("render the textarea", () => {
    /* 3 steps render, query, condition
      1.render the component that we want to test 
      2.search the element in this component that we want to test 
      3. add the condition */
    render(<Counter />); //return queries that help us to select sthg
    const textArea = screen.getByTestId("textArea");
    //check if the element exist or not
    expect(textArea).toBeTruthy();
  });

  test("render the Character result", () => {
    render(<Counter />);
    const charLength = screen.getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });

  test("render the word result", () => {
    render(<Counter />);
    const wordLength = screen.getByText("Word: 0");
    expect(wordLength).toBeInTheDocument();
  });

  test("clear textarea and update the result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getByTestId("clearBtn");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "hello");
    expect(charLength.innerHTML).toBe("Character: 5");
    expect(wordLength.innerHTML).toBe("Word: 1");

    userEvent.click(clearBtn);
    expect(charLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
});
