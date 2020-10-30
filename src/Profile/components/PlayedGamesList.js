import React from 'react';
import PlayedGame from './PlayedGame';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { changeUserPlayedGameLikeValue, saveUserPlayedGame } from '../../redux/actions/userPlayedGamesActions';
import { resetGames, addGames, updateGameLikeValue } from '../../redux/actions/gamesActions';
import GameSearchBar from '../../Signup/components/GameSearchBar';
import SearchResultsList from '../../Signup/components/SearchResultsList';

class PlayedGamesList extends React.Component {
  state = {
    edit: false
  }

  componentDidMount() {
    this.props.resetGames();
    const toDisplay = [...this.props.playedGames];
      for (let game of toDisplay) {
        game.liked = this.props.userPlayedGames.find(userPlayedGame => { return userPlayedGame.game_id === game.id }).liked
      }
    this.props.addGames(toDisplay);
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
        
        const token = localStorage.getItem('token')
        for (let game of this.props.displayGames) {
          if (game.destroy !== true) {
            fetch('http://localhost:3000/api/v1/user_played_games', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                game_id: game['igdb_id'],
                liked: game['liked'],
                game: {
                  igdb_id: game['idgb_id'],
                  name: game['name'],
                  cover_url: game['cover_url'],
                  release_date: game['first_release_date'],
                  platforms: game['platforms']
                }
              })
            })
            .then(resp => resp.json())
            .then(console.log)
          } else if (game.destroy === true && typeof(game.id) !== 'undefined') {
            const u_p_game_id = this.props.userPlayedGames.find(u_p_game => { return u_p_game.game_id === game.id}).id
            fetch(`http://localhost:3000/api/v1/user_played_games/${u_p_game_id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
              }
            })
            .then(resp => resp.json())
            .then(console.log('BALEETED'))
          }
        }
        this.props.getUser()
      } 
    })
  }

  render() {
    return (
      <>
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
        {this.state.edit ? 
          <>
            <h3 className="text-center">Add Another Game</h3>
            <GameSearchBar />
            <SearchResultsList />
          </>
          :
          null
        }
      </>
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