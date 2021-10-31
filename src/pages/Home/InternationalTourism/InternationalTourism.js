import React from "react";
import { Card } from "react-bootstrap";

const InternationalTourism = () => {
  return (
    <div>
      <h2 className="common-header">International Tour Packages</h2>
      <div className="row m-3">
        <div className="col-md-3 col-sm-12 col-12">
          <Card className="m-2">
            <Card.Img
              class="packages-img"
              variant="top"
              src="https://i.ibb.co/nC8xYnZ/lady-ocean-summertime-woman-vacation.png"
            />
            <Card.Body>
              <Card.Title>MalDip</Card.Title>
              <Card.Title>Three Night Four Day </Card.Title>
              <Card.Text>
                3 Nights’ Accommodation on Twin Share Basis Daily Breakfast at
                Hotel Male Airport –Hotel-Airport Transfer by Speed boat, we
                explore many historical place in male, there have many ancient
                places, Provably we will cover most of remarkable spot
              </Card.Text>
            </Card.Body>

            {/* <button className="bookingButton" onClick={bookOrder}><b>Book Now</b></button> */}
          </Card>
        </div>
        <div className="col-md-3 col-sm-12 col-12">
          <Card className="m-2">
            <Card.Img
              class="packages-img"
              variant="top"
              src="https://i.ibb.co/xsM7MTk/nepal.png"
            />
            <Card.Body>
              <Card.Title>Nepal</Card.Title>
              <Card.Title>Nepal five Night Six Day</Card.Title>
              <Card.Text>
                Package includes: Dhaka - Kathmandu - Dhaka air ticket by
                Himalayan air, nights twin share accommodation in Kathmandu at
                Hotel Royal Suite (3 star), nights twin share accommodation in
                Pokhara at hotel Dandelion (3 star)
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12 col-12">
          <Card className="m-2">
            <Card.Img
              class="packages-img"
              variant="top"
              src="https://i.ibb.co/JtNMSV3/bali.png"
            />
            <Card.Body>
              <Card.Title>Bali,Indonesia</Card.Title>
              <Card.Title>Three Night Four Day</Card.Title>
              <Card.Text>
                Bali is a province of Indonesia and the westernmost of the
                Lesser Sunda Islands. East of Java and west of Lombok, the
                province includes the island of Bali, so we are recently added dhaka to bali tour package, we are very excited explore to bali .
              </Card.Text>
            </Card.Body>

            {/* <button className="bookingButton" onClick={bookOrder}><b>Book Now</b></button> */}
          </Card>
        </div>
        <div className="col-md-3 col-sm-12 col-12">
          <Card className="m-2">
            <Card.Img
              class="packages-img"
              variant="top"
              src="https://i.ibb.co/ZxZGpvM/singapore.png"
            />
            <Card.Body>
              <Card.Title>Singapore</Card.Title>
              <Card.Title>Four Night Four Day</Card.Title>

              <Card.Text>Dhaka - Singapore - Dhaka air ticket by Biman Bangladesh airlines, 2 nights twin share accommodation in Singapore at Hotel Royal or similar, daily breakfast, all taxes & service charge, airport–hotel-airport transfers & half day city tour.</Card.Text>
            </Card.Body>

            {/* <button className="bookingButton" onClick={bookOrder}><b>Book Now</b></button> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InternationalTourism;
