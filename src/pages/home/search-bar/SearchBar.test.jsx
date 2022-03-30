import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const utils = render(
    <SearchBar
      inputValue={"test"}
      onSearchValue={jest.fn()}
      onInputFocus={jest.fn()}
    />,
    { wrapper: Router },
  );
  const input = screen.getByRole("textbox");
  const cancelBtn = screen.getByRole("button");

  return {
    input,
    cancelBtn,
    ...utils,
  };
};

test("It should  render input with inputValue prop", () => {
  const { input } = setup();
  expect(input.value).toBe("test");
});
test("It should allow values to be in the input when the value is changed", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "Hi" } });
  expect(input.value).toBe("Hi");
});

test("Cancel button should clear input", () => {
  const { cancelBtn, input } = setup();
  fireEvent.click(cancelBtn);
  expect(input.value).toEqual("");
});
