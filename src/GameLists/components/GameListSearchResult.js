import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { addOwnedGame } from '../../redux/actions/ownedGamesActions';
import { addSavedRecsGame } from '../../redux/actions/savedRecsGamesActions';
import { addWishlistGame } from '../../redux/actions/wishlistGamesActions';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Row>
          <Col xs={2}>
          <Image className="p-0" src={this.props.result.cover_url} style={{height: '20vh'}} thumbnail fluid />
          </Col>
          <Col>
            {this.props.result.name} {this.props.result.first_release_date ? `(${this.props.result.first_release_date})` : null } {this.mapPlatforms()}
          </Col>
        </Row>
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