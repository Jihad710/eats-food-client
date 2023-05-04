import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';



import { CardGroup, Row } from 'react-bootstrap';

import Recipe from '../Recipe';

const Recipes = () => {
    const recipes = useLoaderData()
    console.log(recipes)
    

    return (
        
        <>
        <h2 className='text-center mt-4 mb-0 fs-1 fw-semibold'>Chef Recipes</h2>
        <Row xs={1} md={3} className="my-3 g-4">
            
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe ={recipe} ></Recipe>)
            }
        </Row>
        </>
        
    );
};

export default Recipes;