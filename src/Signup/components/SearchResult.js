import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { addGame, updateGameLikeValue } from '../../redux/actions/gamesActions';

class SearchResult extends React.Component {
  handleClick = event => {
    this.props.addGame(this.props.result);

    if (this.props.parent !== 'profile') {
      this.props.updateGameLikeValue(this.props.result, 1);
    } else {
      this.props.updateGameLikeValue(this.props.result, 0)
    }
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

const mapDispatchToProps = dispatch => {
  return {
    addGame: (gameObj) => dispatch(addGame(gameObj)),
    updateGameLikeValue: (gameObj, liked) => dispatch(updateGameLikeValue(gameObj, liked))
  }
}

export default connect(null, mapDispatchToProps)(SearchResult);