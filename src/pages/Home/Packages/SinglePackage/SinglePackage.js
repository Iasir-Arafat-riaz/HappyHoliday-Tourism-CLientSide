import React from "react";
import { Card, Col } from "react-bootstrap";
import "./SinglePackage.css";

const SinglePackage = (props) => {
  const { packg, info, img } = props.package;
  return (
    <div>
      <Col >
        <Card className="m-2">
          <Card.Img class="packages-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>{packg}</h1>
            </Card.Title>
            <Card.Text>
              <p>{info}</p>
            </Card.Text>
          </Card.Body>
          <button>Book Now</button>
        </Card>
      </Col>
      {/* <img src={img} alt=""/> */}
    </div>
  );
};

export default SinglePackage;
