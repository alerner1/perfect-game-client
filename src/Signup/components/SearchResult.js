import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { addGame, likeGame } from '../../actions/gamesActions';

class SearchResult extends React.Component {
  handleClick = event => {
    this.props.addGame(this.props.result);
    this.props.likeGame(this.props.result);
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
    likeGame: (gameObj) => dispatch(likeGame(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(SearchResult);