import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Banner = () => {
    return (
        <div  className='mb-5 py-5' style={{background: '', backgroundRepeat: 'no-repeat' }}>
            <Container >
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={4}>
                        <Image  className=' ' src="https://i.ibb.co/J36W2XY/lily-banse-YHSwy6uqvk-unsplash.jpg" alt="Chef preparing food" fluid />
                    </Col>
                    <Col xs={10} md={6} className="d-flex flex-column justify-content-center mt-md-0 mt-5">
                        
                        <p className='text-center fw-semibold'>
Welcome to our delicious food website! Here, you'll find an array of recipes, cooking tips, and culinary inspiration to tantalize your taste buds. From hearty comfort food to elegant dishes, we've got something for everyone. So, come on in, browse around, and get ready to be inspired in the kitchen!</p>
                        <button className=" btn btn-outline-dark btn-lg rounded-pill px-4 py-2 fw-semibold">Discover More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;