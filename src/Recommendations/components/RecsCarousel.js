import React from 'react';
import RecCard from './RecCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class RecsCarousel extends React.Component {
  mapGames = () => {
    return ['game 1', 'game 2', 'game 3', 'game 4', 'game 5'].map(game => {
      return (
        <Col>
          <RecCard game={game} />
        </Col>
      )
    })
  }

  render(){
    return (
      <>
      <Row>
        <Col xs={1}>
          {/* this is space for buttons */}
        </Col>
        <Col>
          <Container fluid className="border border-dark rounded p-3">
            <Row>
              {this.mapGames()}
            </Row>
          </Container>
        </Col>
        <Col xs={1}>
        </Col>
      </Row>
      </>
    )
  }
}

export default RecsCarousel;