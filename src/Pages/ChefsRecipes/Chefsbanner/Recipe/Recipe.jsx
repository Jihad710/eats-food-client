import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import { toast } from 'react-hot-toast';

const Recipe = ({ recipe }) => {
const [favorite ,setFavorite] = useState(false)
    const handleFavorite =()=>{
        setFavorite(!favorite)
        toast.success("added to favorite")  
    }
    const { rating, name, ingredients, id, chef_id, cooking_method } = recipe
    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>
                        <span className='fw-semibold'>Ingredients</span>:
                    </p>

                    <ul>
                        {ingredients.slice(0, 5).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p><small><span className='fw-semibold'>cooking_method :</span>{cooking_method.slice(0, 300)} {cooking_method.length > 300 && <>...</>}</small></p>
                    <div className=" d-flex">
                        <div className="flex-grow-1 d-flex align-items-center gap-2">
                            <small className="text-body-secondary"><ReactStarsRating value={Math.round(rating)} /></small>
                            <small><span>{rating}</span></small>
                        </div>
                        <div className="">
                            <Button disabled={favorite} onClick={handleFavorite} className='fw-semibold rounded-pill' variant='warning'>Add to Favorite</Button>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Recipe;