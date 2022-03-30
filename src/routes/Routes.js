import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Home from "pages/home";
import { Spinner } from "reactstrap";
import Detail from "pages/detail";

const AppRoutes = () => {
  // set inputValue in parent incase user navigate to detail and back to search :
  const [query, setQuery] = useState(null);
  return (
    <Router fallback={<Spinner />}>
      <Routes>
        <Route
          path="/search"
          element={<Home query={query} onSetQuery={setQuery} />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Navigate replace to="/search" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
