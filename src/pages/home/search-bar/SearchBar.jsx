import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useRef } from "react";
import { Button, Col, Form, FormGroup, Input } from "reactstrap";
import searchIcon from "assets/images/search.svg";
import closeIcon from "assets/images/close.svg";
import "assets/css/search.scss";
import { useNavigate } from "react-router-dom";

function SearchBar({ onInputFocus, onSearchValue, inputValue }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const changeHandler = (event) => {
    onSearchValue(event.target.value);
  };
  useEffect(() => {
    if (inputRef) {
      inputRef.current.value = inputValue;
    }
  }, [inputRef, inputValue]);
  const resetInput = () => {
    inputRef.current.value = "";
    onSearchValue(null);
    // remove page number from url in case reset input:
    navigate("/search");
  };

  //  debounce change handler for avoid call api frequently
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 200), []);
  return (
    <Form className="row d-flex justify-content-center w-100">
      <Col lg="6" sm="10" xs="10">
        <FormGroup className="position-relative">
          <Input
            innerRef={inputRef}
            placeholder="Search"
            onFocus={() => onInputFocus(true)}
            onBlur={() => onInputFocus(false)}
            type="text"
            className="ps-5"
            onChange={debouncedChangeHandler}
          />
          <img src={searchIcon} alt="search" className="search-icon" />
          {inputRef?.current?.value ? (
            <img
              data-testid="clear"
              src={closeIcon}
              alt="close"
              className="clear"
              onClick={(e) => {
                e.preventDefault();
                resetInput();
                inputRef.current.focus();
              }}
            />
          ) : null}
        </FormGroup>
      </Col>
      <Col lg="2" sm="2" xs="2">
        <Button color="danger" onClick={resetInput}>
          Cancel
        </Button>
      </Col>
    </Form>
  );
}

export default React.memo(SearchBar);
