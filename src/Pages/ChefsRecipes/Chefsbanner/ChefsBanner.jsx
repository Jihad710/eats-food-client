import React, { useContext, useEffect, useState } from 'react';
import {Col, Container, Row } from "react-bootstrap";

import { useParams } from 'react-router-dom';

import { Card } from 'react-bootstrap';

const ChefsBanner = () => {
    const {id} =useParams()
    const [chefs ,setChef] = useState([])

    useEffect(()=>{
        fetch('https://eats-extra-server-rjk-jami.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChef(data))
        .catch(error=>console.log(error))
    },[])
    const selectedChef = chefs.find((c)=>c.id === parseInt(id))
    console.log(selectedChef)
//    const { name, likes, num_recipes, photo_url, years_of_experience, awarded ,rating } = selectedChef
    return (
        <div className="bg-light" style={{ background: 'linear-gradient(45deg, rgba(0,191,255,0.2), rgba(135,206,250,0.2))', backgroundRepeat: 'no-repeat' }}>
  <Container>
    <Row className="align-items-center py-5">
      <Col md={4}>
        <Card className="border-0 bg-transparent">
          <Card.Img src={selectedChef?.photo_url} className="img-fluid " alt="chef" />
        </Card>
      </Col>
      <Col md={8}>
        <div className="d-flex"><h1 className='m-0'>{selectedChef?.name}</h1><small className='align-self-end'>Years of experience: {selectedChef?.years_of_experience}</small></div>
        <p className='mt-2'>{selectedChef?.lifeStory}</p>
        <div className=" flex-grow-1 d-flex  align-items-center gap-3"><p>Likes: {selectedChef?.likes}</p>
        <p>Number of recipes: {selectedChef?.num_recipes}</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>

    );
};

export default ChefsBanner;