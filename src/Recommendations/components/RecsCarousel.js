import React from 'react';
import RecCard from './RecCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

class RecsCarousel extends React.Component {
  mapGames = () => {
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

  render(){
    return (
      <>
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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    recommendedGames: state.recommendedGames
  }
}

export default connect(mapStateToProps)(RecsCarousel);