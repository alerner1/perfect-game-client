import React from 'react';
import PlayedGame from './PlayedGame';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { changeUserPlayedGameLikeValue } from '../../actions/userPlayedGamesActions';

class PlayedGamesList extends React.Component {
  state = {
    edit: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userPlayedGames !== this.props.userPlayedGames) {
      console.log('changed')
      this.renderPlayedGames()
    }
  }

  renderPlayedGames = () => {
    return this.props.playedGames.map(game => {
      let likeValue = 0;
      for (let userPlayedGame of this.props.userPlayedGames) {
        if (userPlayedGame.game_id === game.id) {
          likeValue = userPlayedGame.liked
        }
      }
      return <PlayedGame key={game.id} game={game} likeValue={likeValue} updateLikes={this.updateLikes} edit={this.state.edit} />
    })
  }

  updateLikes = (gameObj, liked) => {
    this.props.changeUserPlayedGameLikeValue(gameObj, liked)
  }

  toggleEdit = () => {
    this.setState(prev => ({edit: !prev.edit}))
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
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayedGamesList);