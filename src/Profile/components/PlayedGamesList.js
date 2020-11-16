import React from 'react';
import PlayedGame from './PlayedGame';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { changeUserPlayedGameLikeValue, saveUserPlayedGame } from '../../redux/actions/userPlayedGamesActions';
import { resetGames, addGames, updateGameLikeValue, clearSearchResults } from '../../redux/actions/gamesActions';
import GameSearchBar from '../../Signup/components/GameSearchBar';
import SearchResultsList from '../../Signup/components/SearchResultsList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddGameModal from './AddGameModal';

class PlayedGamesList extends React.Component {
  state = {
    edit: false,
    showModal: false
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
    if (prevProps.playedGames !== this.props.playedGames) {
      this.props.resetGames();
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
            fetch('https://the-perfect-game-backend.herokuapp.com/api/v1/user_played_games', {
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
                  igdb_id: game['igdb_id'],
                  name: game['name'],
                  cover_url: game['cover_url'],
                  release_date: game['first_release_date'],
                  platforms: game['platforms']
                }
              })
            })
            .then(resp => resp.json())
            .then(this.props.getUser())
          } else if (game.destroy === true && typeof(game.id) !== 'undefined') {
            const u_p_game_id = this.props.userPlayedGames.find(u_p_game => { return u_p_game.game_id === game.id}).id
            fetch(`https://the-perfect-game-backend.herokuapp.com/api/v1/user_played_games/${u_p_game_id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
              }
            })
            .then(resp => resp.json())
            .then(this.props.getUser())
          }
        }
      } else {
        this.props.clearSearchResults();
      }
    })
  }

  showModal = () => {
    this.props.clearSearchResults();
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <>
        <Container className="mt-3 mx-auto" style={{width: '75vw'}}>
            <AddGameModal showProp={this.state.showModal} closeModal={this.closeModal} parent="profile" />
            <Row>
              <Col xs={2}></Col>
              <Col>
                <h3 className="text-center">
                  Games You've Played
                </h3>
              </Col>
              <Col xs={3}>
                <Button className="ml-3 float-right" onClick={this.toggleEdit}>{this.state.edit ? 'Save' : 'Edit'}</Button>
                {this.state.edit ? <Button onClick={this.showModal} className="float-right">Add Game</Button> : null }
              </Col>
            </Row>
            <ListGroup className="mt-3" style={{height: '75vh', overflow: 'auto'}}>
              {this.renderPlayedGames()}
            </ListGroup>
          
        </Container>
        {/* {this.state.edit ? 
          <>
            <h3 className="text-center mt-3">Add Another Game</h3>
            <GameSearchBar />
            <SearchResultsList parent='profile' />
          </>
          :
          null
        } */}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    playedGames: state.playedGames,
    userPlayedGames: state.userPlayedGames,
    displayGames: state.games.displayGames.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked)),
    saveUserPlayedGame: (gameObj) => dispatch(saveUserPlayedGame(gameObj)),
    resetGames: () => dispatch(resetGames()),
    addGames: (gamesArray) => dispatch(addGames(gamesArray)),
    updateGameLikeValue: (gameObj, liked) => dispatch(updateGameLikeValue(gameObj, liked)),
    clearSearchResults: () => dispatch(clearSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayedGamesList);