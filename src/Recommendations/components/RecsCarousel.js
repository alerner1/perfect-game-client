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
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" />
          <p className="pl-3">Getting recommendations...</p>
        </div>
      )
    } else {
      let numOfRows = parseInt(this.props.recommendedGames.length / 5, 10);
      const allGames = [];

      if (this.props.recommendedGames.length % 5 !== 0) { numOfRows++; }

      for (let i = 0; i < numOfRows; i++) {
        allGames.push(this.mapRow(i));
      }

      return <Carousel interval={null}>{allGames}</Carousel>;
    }
  }

  mapRow = row => {
    const thisRow = this.props.recommendedGames.filter(game => {
      return this.props.recommendedGames.indexOf(game) >= row * 5 && this.props.recommendedGames.indexOf(game) < (row + 1) * 5;
    });

    return (
      <Carousel.Item>
        <Row>
          <Col xs={1}></Col>
          <Col>
            <Container fluid className="border border-dark rounded p-3">
              <Row>
                {thisRow.map(game => {return (<Col><RecCard game={game} /></Col>)})}
              </Row>
            </Container>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Carousel.Item>
    )
  }

  render(){
    return (
      <>
        {this.mapGames()}
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