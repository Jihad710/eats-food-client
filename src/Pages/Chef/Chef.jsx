import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Image, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {
    // const{loading} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
setTimeout(()=>{
    setLoading(false)
})
       
    },[])
    const { id, name, likes, num_recipes, photo_url, years_of_experience, awarded ,rating} = chef
    return (
        <div>
            <LazyLoad height="100%" width="100%" threshold={0.95} >
{

loading ? <><Spinner animation="border" variant="warning" /><h2>Loading.......</h2></> :
            
            <Card className="text-center mb-4" style={{background: '#f7f7f7', backgroundRepeat: 'no-repeat' }}>
                <div className='px-3 py-3'>
                <Image src={photo_url} fluid  rounded />
                </div>
                <Card.Body className='pt-0'>
                    <Card.Title className='fs-2 fw-bold mt-0'>{name}</Card.Title>
                    <ListGroup className='my-3'>
                    <ListGroup.Item variant="success">
                        <p className='fs-5'>Years of experience: <span className='fw-bold fs-4 ' >{years_of_experience}</span></p>
                        <p>Numbers of recipes: <span className='fw-bold'>{num_recipes}</span></p>
                        </ListGroup.Item>
                        </ListGroup>
                    <Link to={`/recipes/${id}`}>
                    <Button  variant="btn btn-outline-dark btn-lg rounded-pill px-4 py-2 fw-semibold">View Recipes</Button>
                    </Link>
                    
                </Card.Body>
                <Card.Footer className="fs-5">Likes: <span className='fw-bold'>{likes}</span></Card.Footer>
            </Card>
}
</LazyLoad>
        </div>
    );
};

export default Chef;