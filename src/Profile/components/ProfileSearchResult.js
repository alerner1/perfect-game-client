import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { addUserPlayedGame } from '../../redux/actions/userPlayedGamesActions';
import { addPlayedGame, savePlayedGame } from '../../redux/actions/playedGamesActions';

class ProfileSearchResult extends React.Component {
  handleClick = event => {
    this.props.savePlayedGame(this.props.result)
    // this.props.addPlayedGame({
    //   igdb_id: this.props.result.id,
    //   cover: this.props.result.cover,
    //   first_release_date: this.props.result.first_release_date,
    //   name: this.props.result.name,
    //   platforms: this.props.result.platforms
    // });
    this.props.addUserPlayedGame(this.props.result.id, this.props.currentUser.id)
  }

  mapPlatforms = () => {
    if (this.props.result.platforms) {
      return (
        <ListGroup horizontal>
          {this.props.result.platforms.map(platform => { 
          return (
            <ListGroup.Item>{platform.abbreviation}</ListGroup.Item>
          )})}
        </ListGroup>
      )
    }
  }

  render() {
    return(
      <ListGroup.Item action onClick={this.handleClick}>
        {this.props.result.name} {this.props.result.first_release_date ? `(${this.props.result.first_release_date})` : null } {this.mapPlatforms()}
      </ListGroup.Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUserPlayedGame: (game_id, user_id) => dispatch(addUserPlayedGame(game_id, user_id)),
    addPlayedGame: (gameObj) => dispatch(addPlayedGame(gameObj)),
    savePlayedGame: (gameObj) => dispatch(savePlayedGame(gameObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearchResult);