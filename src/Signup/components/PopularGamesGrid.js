import React from 'react';
import { connect } from 'react-redux';
import { getPopularGames, clearGames, likeGame, unlikeGame } from '../../actions/gamesActions';
import PopularGame from './PopularGame';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PopularGamesGrid extends React.Component {
  componentDidMount() {
    this.props.getPopularGames();
  }

  componentWillUnmount() {
    this.props.clearGames();
  }

  handleClick = (gameObj) => {
    if (gameObj.liked === false) {
      this.props.likeGame(gameObj);
    } else {
      this.props.unlikeGame(gameObj);
    }
  }

  mapRow = row => {
    const thisRow = this.props.popularGames.filter(game => {
      return this.props.popularGames.indexOf(game) >= row * 5 && this.props.popularGames.indexOf(game) < (row + 1) * 5;
    });

    return (
      <Row noGutters key={row}> 
        <Col xs={1}>
        </Col>
          {thisRow.map(game => <PopularGame key={game.id} handleClick={this.handleClick} game={game} />)}
        <Col xs={1}>
        </Col>
      </Row>
    )
  }
  
  renderGames = () => {
    let numOfRows = parseInt(this.props.popularGames.length / 5, 10);
    const allGames = [];

    if (this.props.popularGames.length % 5 !== 0) { numOfRows++; }

    for (let i = 0; i < numOfRows; i ++) {
      allGames.push(this.mapRow(i));
    }

    return allGames;
  }

  render(){
    return (
      <Container fluid>
        {this.renderGames()}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    popularGames: state.games.displayGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPopularGames: () => dispatch(getPopularGames()),
    clearGames: () => dispatch(clearGames()),
    likeGame: (gameObj) => dispatch(likeGame(gameObj)),
    unlikeGame: (gameObj) => dispatch(unlikeGame(gameObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularGamesGrid);