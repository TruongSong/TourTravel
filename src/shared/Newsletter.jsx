import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
const Newsletter = () => {
  return (
    <section className="newsletter">
        <Container>
      <Row>
        <Col lg="6">
          <div className="newsletter__content">
            <h2>
              Is there any page dedicated to admin where he can upload tours
            </h2>
            <div className="newsletter__input">
              <input type="email" placeholder="Enter your email" />
              <button className="btn newsletter__btn">Subscribe</button>
            </div>
            <p>
              ello bro your project is great but i dont know how fornted and
              backend folder created/....
            </p>
          </div>
        </Col>
        <Col lg="6">
          <div className="newsletter__img">
            <img src={maleTourist} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Newsletter;
