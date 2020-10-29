import React from 'react';
import PlayedGame from './PlayedGame';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { changeUserPlayedGameLikeValue, saveUserPlayedGame } from '../../actions/userPlayedGamesActions';

class PlayedGamesList extends React.Component {
  state = {
    edit: false
  }

  renderPlayedGames = () => {
    return this.props.playedGames.map(game => {
      let likeValue = 0;
      for (let userPlayedGame of this.props.userPlayedGames) {
        if (userPlayedGame.game_id === game.id) {
          likeValue = userPlayedGame.liked;
        }
      }
      return <PlayedGame key={game.id} game={game} likeValue={likeValue}updateLikes={this.updateLikes} edit={this.state.edit} />
    })
  }

  updateLikes = (gameObj, liked) => {
    this.props.changeUserPlayedGameLikeValue(gameObj, liked)
  }

  toggleEdit = () => {
    this.setState(prev => ({edit: !prev.edit}), () => {
      if (this.state.edit === false) {
        for (let userPlayedGame of this.props.userPlayedGames) {
          if (userPlayedGame.destroy === true) {
            const token = localStorage.getItem('token');
            fetch(`http://localhost:3000/api/v1/user_played_games/${userPlayedGame.id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({user_played_game: userPlayedGame})
            })
            .then(resp => resp.json())
            .then(console.log)
          } else if (userPlayedGame.changed === true) {
            this.props.saveUserPlayedGame(userPlayedGame)
          }
        }
        this.props.getUser()
      }
    })
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            Games You've Played
            <Button className="ml-5" onClick={this.toggleEdit}>{this.state.edit ? 'Save' : 'Edit'}</Button>
          </Card.Title>
          <ListGroup>
            {this.renderPlayedGames()}
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    playedGames: state.playedGames,
    userPlayedGames: state.userPlayedGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked)),
    saveUserPlayedGame: (gameObj) => dispatch(saveUserPlayedGame(gameObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayedGamesList);