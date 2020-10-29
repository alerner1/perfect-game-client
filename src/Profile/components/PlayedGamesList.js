import React from 'react';
import PlayedGame from './PlayedGame';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class PlayedGamesList extends React.Component {
  state = {
    edit: false
  }

  renderPlayedGames = () => {
    return this.props.playedGames.map(game => {
      for (let userPlayedGame of this.props.userPlayedGames) {
        if (userPlayedGame.game_id === game.id) {
          game['liked'] = userPlayedGame.liked
        }
      }
      return <PlayedGame key={game.id} game={game} edit={this.state.edit} />
    })
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
    playedGames: state.user.currentUser.played_games,
    userPlayedGames: state.user.currentUser.user_played_games
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayedGamesList);