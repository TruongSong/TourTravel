import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const quick__link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__link2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];
const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                hello bro your project is great but i dont know how fornted and
                backend folder created/....
              </p>
                <div className="social__links d-flex align-items-center gap-4">
                  <span>
                    <Link to='#'><i class="ri-youtube-fill"></i></Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-github-fill"></i></Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-instagram-fill"></i></Link>
                  </span>
                </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">
              Discover
            </h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__link.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">
              Quick Links
            </h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__link2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">
              Contact
            </h5>
            <ListGroup className='footer__quick-links'>
               
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span><i class="ri-map-pin-fill"></i></span>
                      Address:
                    </h6>
                    <p className="mb-0">HCM, BangKok</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span><i class="ri-mail-fill"></i></span>
                      Email:
                    </h6>
                    <p className="mb-0">kelvin180497@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span><i class="ri-phone-line"></i></span>
                      Phone:
                    </h6>
                    <p className="mb-0">0982867617</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
              <p className="copyright">Copyright {year}, design and development by Kelvin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
