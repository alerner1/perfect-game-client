import React from 'react';
import PopularGamesGrid from '../components/PopularGamesGrid';
import ContinueButton from '../components/ContinueButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PopularGamesContainer = () => {
  return (
    <>
      <h3 className="my-3 text-center">To get started, select games you enjoyed (if any):</h3>
      <PopularGamesGrid />
      <Row>
        <Col xs={9}>
        </Col>
        <Col xs={2}>
          <ContinueButton />
        </Col>
        <Col xs={1}>
        </Col>
      </Row>
    </>
  )
}

export default PopularGamesContainer;