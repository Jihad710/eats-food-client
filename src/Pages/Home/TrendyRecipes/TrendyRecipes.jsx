import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const TrendyRecipes = () => {
    const recipes = useLoaderData()
    console.log(recipes)
    const trendyRecipes =  recipes.filter((r)=>r.trendyRecipes === true)
    console.log(trendyRecipes)
    return (
        <>
        <h2 style={{fontFamily:'Consolas'}} className='text-center fw-bold mb-5'><FaAngleDoubleDown className='text-warning'></FaAngleDoubleDown> Trendy Recipes <FaAngleDoubleDown className='text-warning'></FaAngleDoubleDown></h2>
        <div className='d-flex flex-column align-items-center gap-3 '>
            
        {
            trendyRecipes.map(recipes=><>
                {[
                  
                  'Light'
                  
                ].map((variant) => (
                  <Card border="warning"
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Header>
                    <Image src="https://i.ibb.co/BPMr0r6/Nigella-Lawson.jpg" fluid rounded />
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className='fs-3 fw-semibold'>{recipes?.name}</Card.Title>
                      <Card.Text>
                        Ratings : <span className='fw-semibold'>{recipes?.rating}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </>)
        }
        </div>
        </>
    );
};

export default TrendyRecipes;