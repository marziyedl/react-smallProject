import React, { useMemo } from "react";
import { Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

function ListPagination({ total = 1, onSetPageNumber, pageNumber = 1 }) {
  const numbers = useMemo(() => (total > 10 ? 10 : total), [total]);

  return (
    <Col className="d-flex justify-align-content-end">
      <Pagination>
        <PaginationItem onClick={() => onSetPageNumber(1)}>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem onClick={() => onSetPageNumber(pageNumber)}>
          <PaginationLink previous />
        </PaginationItem>
        {Array.from(Array(numbers), (e, i) => (
          <PaginationItem
            key={i}
            active={i === pageNumber}
            onClick={() => {
              onSetPageNumber(i);
            }}
          >
            <PaginationLink>{i + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem onClick={() => onSetPageNumber(pageNumber)}>
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={() => onSetPageNumber(total)} />
        </PaginationItem>
      </Pagination>
    </Col>
  );
}

export default React.memo(ListPagination);
