import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

const GifViewCard = ({ data }) => {
  return (
    <Col
      data-testid="viewCard"
      sm="6"
      lg="4"
      xl="3"
      className="mb-3"
      key={data.id}
    >
      <Card>
        <div className="position-relative">
          <Link
            to={`/detail?url=${data.images.downsized.url}&title=${data.title}&rating=${data.rating}`}
            className="w-40 w-sm-100"
          >
            <CardImg
              height={300}
              top
              alt={data.title}
              src={data.images.downsized_still.url}
            />
          </Link>
        </div>
        <CardBody>
          <Row>
            <Col xxs="10" className="mb-3">
              <CardSubtitle className="text-truncate">
                {data.title}
              </CardSubtitle>
              <CardText
                title="Import time"
                className="text-muted text-small mb-0 font-weight-light"
              >
                {data.import_datetime}
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default React.memo(GifViewCard);
