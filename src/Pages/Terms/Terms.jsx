import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
      <Row>
        <Col>
          <h1>Terms and Conditions</h1>
          <p>Welcome to Eats Extra! These terms and conditions outline the rules and regulations for the use of our website.</p>
          <h2>Agreement to Terms</h2>
          <p>By accessing or using our website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please do not use our website.</p>
          <h2>Use of the Website</h2>
          <p>Eats Extra is a website that provides information and services related to cooking, recipes, and other culinary topics. You may use our website for lawful purposes only and in accordance with these terms and conditions.</p>
          <h2>User Accounts</h2>
          <p>To access certain features of our website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer and account. You agree to accept responsibility for all activities that occur under your account or password.</p>
          <h2>Intellectual Property</h2>
          <p>The content on our website, including but not limited to text, graphics, images, videos, and software, is owned by or licensed to Eats Extra and is protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, modify, distribute, display, or transmit any of the content on our website without our prior written consent.</p>
          <h2>Disclaimer of Warranties</h2>
          <p>Eats Extra makes no representations or warranties of any kind, express or implied, as to the operation of our website or the information, content, materials, or products included on our website. You expressly agree that your use of our website is at your own risk.</p>
          <h2>Limitation of Liability</h2>
          <p>Eats Extra will not be liable for any damages of any kind arising from the use of our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
          <h2>Indemnification</h2>
          <p>You agree to indemnify and hold Eats Extra, its affiliates, officers, directors, employees, agents, and licensors harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these terms and conditions or your violation of any law or the rights of a third party.</p>
          <h2>Changes to Terms and Conditions</h2>
          <p>Eats Extra reserves the right to modify or update these terms and conditions at any time without prior notice. Your continued use of our website after any such changes constitutes your acceptance of the new terms and conditions.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about these terms and conditions, please contact us at info@eatsextra.com.</p>
        </Col>
      </Row>
      <div class="d-grid gap-2 col-3 me-auto">
      <Link to={`/register`}><Button variant='warning'> <FaArrowLeft></FaArrowLeft> Go Back</Button></Link>
      </div>
    </Container>
    );
};

export default Terms;