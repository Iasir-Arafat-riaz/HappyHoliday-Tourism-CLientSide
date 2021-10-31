import React from "react";
import { Card, Col,Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./SinglePackage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SinglePackage = (props) => {
  console.log(props.package)
  const { packg, info, img } = props.package.addingInfo;
  const{_id}=props.package
  const history = useHistory()
  const bookOrder =()=>{
history.push(`/${_id}`)
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
          
          <button className="bookingButton" onClick={bookOrder}><b>Book Now <FontAwesomeIcon icon={faShoppingCart} /></b></button>
        </Card>
      </Col>
      
    </div>
  );
};

export default SinglePackage;
