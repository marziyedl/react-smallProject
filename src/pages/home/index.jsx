import ListPagination from "components/pagination/ListPagination";
import { SearchResultData } from "hooks/context/appContext";
import useSearch from "hooks/custom/useSearch";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Col, Row, Spinner } from "reactstrap";
import { DEFAULT_PAGE_SIZE } from "utils/Constants";
import RandomGIF from "./random-gif/RandomGIF";
import SearchBar from "./search-bar/SearchBar";
import SearchResult from "./search-result/SearchResult";

function Home({ query, onSetQuery }) {
  const [search] = useSearchParams();
  const param = search.get("pageNumber")
    ? parseInt(search.get("pageNumber")) - 1
    : 0;
  const [inputFocus, setInputFocus] = useState(false);
  const [searchedValue, setSearchedValue] = useState(query);
  const [pageNumber, setPageNumber] = useState(param);
  const navigate = useNavigate();
  const { items, loading, pagination } = useSearch(
    pageNumber * DEFAULT_PAGE_SIZE,
    searchedValue,
  );
  const [itemsList, setItemsList] = useState(items);

  useEffect(() => {
    if (!pageNumber) {
      navigate("/search");
    } else {
      navigate("/search?pageNumber=" + (pageNumber + 1));
    }
  }, [pageNumber, navigate]);
  useEffect(() => {
    if (!searchedValue || searchedValue.length < 2) {
      //  if input not hava value means random gif is showing or result list should be empty:
      setPageNumber(0);
      setItemsList([]);
    } else {
      setItemsList(items);
    }
  }, [searchedValue, items]);
  return (
    <section className="mt-2">
      <Row className="d-flex justify-content-center w-100">
        <SearchBar
          onInputFocus={(value) => setInputFocus(value)}
          inputValue={query}
          onSearchValue={(value) => {
            onSetQuery(value);
            setSearchedValue(value);
            setPageNumber(0); //handle page number onsearch
          }}
        />
      </Row>
      <Row>
        {loading ? (
          <Col className="d-flex justify-content-center">
            <Spinner color="secondary" type="grow" />
            <Spinner color="secondary" type="grow" />
            <Spinner color="secondary" type="grow" />
          </Col>
        ) : (
          <SearchResultData.Provider value={itemsList}>
            {inputFocus || searchedValue ? (
              <>
                {itemsList.length ? (
                  <ListPagination
                    total={
                      pagination
                        ? Math.round(pagination.total_count / DEFAULT_PAGE_SIZE)
                        : 1
                    }
                    onSetPageNumber={(value) => {
                      setPageNumber(value);
                    }}
                    pageNumber={pageNumber}
                  />
                ) : null}
                <SearchResult />
              </>
            ) : (
              <RandomGIF />
            )}
          </SearchResultData.Provider>
        )}
      </Row>
    </section>
  );
}

export default Home;
