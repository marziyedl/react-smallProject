import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResult from "./SearchResult";
import { SearchResultData } from "hooks/context/appContext";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import MockData from "utils/mockValue.json";
const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <Router>
      <SearchResultData.Provider {...providerProps}>
        {ui}
      </SearchResultData.Provider>
    </Router>,
    renderOptions,
  );
};

test("It should  render GIFVIEWCard component", async () => {
  const providerProps = {
    value: MockData,
  };

  customRender(<SearchResult />, { providerProps });
  expect(screen.getAllByTestId("viewCard")).toHaveLength(
    providerProps.value.length,
  );
});
