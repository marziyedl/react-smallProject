import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import Home from "./";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("utils/Adapter");
let onActionMock = jest.fn();

jest.mock("./random-gif/RandomGIF", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>random__gif__mock</div>;
    },
  };
});
jest.mock("./search-result/SearchResult", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>SearchResult__mock</div>;
    },
  };
});

describe("findByText Examples", () => {
  const setup = () => {
    const utils = render(<Home query={""} onSetQuery={onActionMock} />, {
      wrapper: Router,
    });
    const cancelBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    return {
      input,
      cancelBtn,
      ...utils,
    };
  };

  test("It should  render Random componet at fist", () => {
    setup();
    expect(screen.getByText("random__gif__mock")).toBeInTheDocument();
     expect(screen.queryByText("SearchResult__mock")).not.toBeInTheDocument();
  });
  test("It should  render result componet on click on input", async () => {
    const { input } = setup();
    userEvent.click(input);
    expect(await screen.findByText("SearchResult__mock")).toBeInTheDocument();
    expect(screen.queryByText("random__gif__mock")).not.toBeInTheDocument();
  });
});
