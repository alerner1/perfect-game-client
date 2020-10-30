import React from 'react';
import CustomLikedGame from './CustomLikedGame';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { unlikeGame } from '../../redux/actions/gamesActions';
import Card from 'react-bootstrap/Card';

class CustomLikedGamesList extends React.Component {
  handleRemove = (game) => {
    this.props.unlikeGame(game)
  }

  mapGames = () => {
    return this.props.displayGames.map(game => {
      if (game.liked === true) {
        return <CustomLikedGame game={game} handleRemove={this.handleRemove} />
      } else {
        return null;
      }
    })
  }

  render(){
    return(
      <Card style={{height: '18rem'}}>
        <Card.Body>
          <Card.Title className="text-center">Liked Games</Card.Title>
          <ListGroup>
            {this.mapGames()}
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayGames: state.games.displayGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    unlikeGame: (gameObj) => dispatch(unlikeGame(gameObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomLikedGamesList);