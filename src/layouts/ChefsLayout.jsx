import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import ChefsBanner from '../pages/ChefsRecipes/ChefsBanner/ChefsBanner';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const ChefsLayout = () => {
    return (
        <div>
            <Header></Header>
            <ChefsBanner></ChefsBanner>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefsLayout;