import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { addOwnedGame } from '../../actions/ownedGamesActions';
import { addSavedRecsGame } from '../../actions/savedRecsGamesActions';
import { addWishlistGame } from '../../actions/wishlistGamesActions';

class GameListSearchResult extends React.Component {
  handleClick = event => {
    if (this.props.parent === 'saved') {
      this.props.addSavedRecsGame(this.props.result)
    } else if (this.props.parent === 'wish') {
      this.props.addWishlistGame(this.props.result)
    } else if (this.props.parent === 'owned') {
      this.props.addOwnedGame(this.props.result)

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
    addOwnedGame: (gameObj) => dispatch(addOwnedGame(gameObj)),
    addWishlistGame: (gameObj) => dispatch(addWishlistGame(gameObj)),
    addSavedRecsGame: (gameObj) => dispatch(addSavedRecsGame(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(GameListSearchResult);