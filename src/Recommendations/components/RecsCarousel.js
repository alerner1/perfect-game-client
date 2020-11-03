import React from 'react';
import RecCard from './RecCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux';

class RecsCarousel extends React.Component {
  mapGames = () => {
    if (this.props.requesting === true) {
      return (
        <>
          <Spinner animation="border" />
          Getting recommendations...
        </>
      )
    } else {
      return this.props.recommendedGames.map(game => {
      // we'll change this later so you can scroll through multiple rows 
        if (this.props.recommendedGames.indexOf(game) < 5) {
          return (
            <Col>
              <RecCard game={game} />
            </Col>
          )
        }
      })
    }
  }

  render(){
    return (
      <>
      <Carousel interval={null}>
        <Carousel.Item>
          <Row>
            <Col xs={1}>
              {/* this is space for buttons */}
            </Col>
            <Col>
              <Container fluid className="border border-dark rounded p-3">
                <Row noGutters>
                  {this.mapGames()}
                </Row>
              </Container>
            </Col>
            <Col xs={1}>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
            <Col xs={1}>
              {/* this is space for buttons */}
            </Col>
            <Col>
              <Container fluid className="border border-dark rounded p-3">
                <Row noGutters>
                  {this.mapGames()}
                </Row>
              </Container>
            </Col>
            <Col xs={1}>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    recommendedGames: state.recommendedGames.games,
    requesting: state.recommendedGames.requesting
  }
}

export default connect(mapStateToProps)(RecsCarousel);