import React from 'react';
import GameInfo from '../components/GameInfo';
import Container from 'react-bootstrap/Container';

class GameInfoContainer extends React.Component {
  render(){
    return ( 
      <Container fluid>
        <GameInfo />
      </Container>
    )
  }
}

export default GameInfoContainer;