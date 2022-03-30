import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  Col,
  Spinner,
} from "reactstrap";

function ImageCard({ data = {}, loading }) {
  return (
    <Col className="d-flex justify-content-center" xxs="12" xs="12" lg="10">
      <Card className="mb-4  border-0">
        <div
          className="position-relative w-100"
          style={{ minHeight: "300px", minWidth: "300px" }}
        >
          {!loading ? (
            <CardImg
              className="w-100"
              top
              src={data.url || data.images?.downsized.url}
              alt="Card image cap"
            />
          ) : null}
        </div>
        <CardBody className="row">
          <CardSubtitle className="mb-4 h4 col-9 text-truncate">
            {!loading ? data.title || "---" : <Spinner size={"sm"} />}
          </CardSubtitle>
          <CardText className="col-3">
            <Badge
              pill
              className=" badge-top-left p-3 fw-bold text-uppercase rounded-circle"
            >
              {data.rating}
            </Badge>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default React.memo(ImageCard);
