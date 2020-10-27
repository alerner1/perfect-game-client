import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const PopularGame = ({ game }) => {
  return (
    <Col xs={2}>
      <Card>
        <Card.Img variant="bottom" src={game['cover']['url']} />
      </Card>
    </Col>
  )
}

export default PopularGame;