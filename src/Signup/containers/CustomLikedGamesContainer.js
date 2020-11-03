import React from 'react';
import PreviousButton from '../components/PreviousButton';
import ContinueButton from '../components/ContinueButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CustomLikedGamesList from '../components/CustomLikedGamesList';
import GameSearchBar from '../components/GameSearchBar';
import SearchResultsList from '../components/SearchResultsList';

class CustomLikedGamesContainer extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <CustomLikedGamesList />
          </Col>
        </Row>
        <Row>
          <Col>
            <GameSearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchResultsList />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <PreviousButton />  */}
          </Col>
          <Col>
            <ContinueButton />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CustomLikedGamesContainer;