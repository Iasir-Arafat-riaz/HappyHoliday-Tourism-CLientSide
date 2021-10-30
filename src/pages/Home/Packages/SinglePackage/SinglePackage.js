import React from "react";
import { Card, Col,Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./SinglePackage.css";

const SinglePackage = (props) => {
  const { packg, info, img,_id } = props.package;
  const history = useHistory()
  const bookOrder =()=>{
history.push(`/Place-Order/${_id}`)
  }
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
          
          <button className="bookingButton" onClick={bookOrder}><b>Book Now</b></button>
        </Card>
      </Col>
      
    </div>
  );
};

export default SinglePackage;
