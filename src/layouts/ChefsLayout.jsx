import React from 'react';
import Header from '../Pages/Shared/Header/Header';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import ChefsBanner from '../Pages/ChefsRecipes/Chefsbanner/ChefsBanner';

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