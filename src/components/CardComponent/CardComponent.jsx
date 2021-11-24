import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    <div style={{ margin: "0.5em" }}>
      <Card border="danger" style={{maxWidth: "22rem"}}>
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
          <Card.Title>{props.isHazardous}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
