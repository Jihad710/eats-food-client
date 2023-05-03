import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark mt-5 py-5">
      <Container >
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="text-white">&copy; 2023 Eats Food | All Rights Reserved</p>
          </Col>
          <Col md={6} className="text-center text-md-end ">
            <p className="text-white mb-3 mb-md-2">Follow us on social media for the latest recipes :</p>
            <div className="d-flex justify-content-center justify-content-md-end">
              <FaFacebook size={30} className="ms-3 me-3 text-white" />
              <FaInstagram size={30} className="me-3 text-white" />
              <FaTwitter size={30} className="text-white" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
