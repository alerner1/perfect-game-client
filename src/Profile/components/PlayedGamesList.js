import React from 'react';
import PlayedGame from './PlayedGame';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { changeUserPlayedGameLikeValue, saveUserPlayedGame } from '../../actions/userPlayedGamesActions';
import { resetGames, addGames, updateGameLikeValue } from '../../actions/gamesActions';

class PlayedGamesList extends React.Component {
  state = {
    edit: false
  }

  componentDidUpdate(prevProps) {
    // maybe this is a good time to move everything into displayGames? like reset and then do that
    if (prevProps.playedGames.length === 0 && prevProps.playedGames !== this.props.playedGames) {
      this.props.resetGames();
      console.log('reset')
      const toDisplay = [...this.props.playedGames];
      for (let game of toDisplay) {
        game.liked = this.props.userPlayedGames.find(userPlayedGame => { return userPlayedGame.game_id === game.id }).liked
      }
      this.props.addGames(toDisplay)
    }
  }

  renderPlayedGames = () => {
    console.log(this.props.displayGames)
    return this.props.displayGames.map(game => {
      return <PlayedGame key={game.id} game={game} liked={game.liked} updateLikes={this.updateLikes} edit={this.state.edit} />
    })
  }

  updateLikes = (gameObj, liked) => {
    this.props.updateGameLikeValue(gameObj, liked)
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
      } else {
        // move display stuff into displayGames and render that way?
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
    userPlayedGames: state.userPlayedGames,
    displayGames: state.games.displayGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked)),
    saveUserPlayedGame: (gameObj) => dispatch(saveUserPlayedGame(gameObj)),
    resetGames: () => dispatch(resetGames()),
    addGames: (gamesArray) => dispatch(addGames(gamesArray)),
    updateGameLikeValue: (gameObj, liked) => dispatch(updateGameLikeValue(gameObj, liked))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayedGamesList);