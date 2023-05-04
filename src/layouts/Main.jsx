import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import TrendyRecipes from '../Pages/Home/TrendyRecipes/TrendyRecipes';
import Awarded from '../Pages/Home/Awarded/Awarded';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Row>
                <Col lg={8} >
                        

                        <Outlet></Outlet>
                    </Col>
                    <Col lg={4} >
                        <TrendyRecipes></TrendyRecipes>
                    </Col>
                </Row>
            </Container>
            <Awarded></Awarded>
            <Footer></Footer>
        </div>
    );
};

export default Main;