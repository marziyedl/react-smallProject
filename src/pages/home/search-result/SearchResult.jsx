import GifViewCard from "components/gif-view-card/GifViewCard";
import { SearchResultData } from "hooks/context/appContext";
import React, { useContext } from "react";
import { Row } from "reactstrap";

function SearchResult() {
  const searchResult = useContext(SearchResultData);
  return (
    <Row>
      {searchResult.map((item) => {
        return <GifViewCard key={item.id} data={item} />;
      })}
    </Row>
  );
}

export default React.memo(SearchResult);
