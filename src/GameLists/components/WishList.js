import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GameCard from './GameCard';
import GameListSearchBar from './GameListSearchBar';
import GameListSearchResultsList from './GameListSearchResultsList';
import { saveWishlistGames } from '../../actions/wishlistGamesActions';

class WishList extends React.Component {
  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState(prev => ({ edit: !prev.edit }), () => {
      if (this.state.edit === false) {
        this.props.saveWishlistGames(this.props.wishlistGames)
      }
    })
  }

  mapRow = row => {
    const thisRow = this.props.wishlistGames.filter(game => {
      return this.props.wishlistGames.indexOf(game) >= row * 5 && this.props.wishlistGames.indexOf(game) < (row + 1) * 5;
    });

    return (
      <Row noGutters key={row}>
        <Col xs={1}>
        </Col>
        {thisRow.map(game => <GameCard key={game.id} game={game} />)}
        <Col xs={1}>
        </Col>
      </Row>
    )
  }

  renderGames = () => {
    let numOfRows = parseInt(this.props.wishlistGames.length / 5, 10);
    const allGames = [];

    if (this.props.wishlistGames.length % 5 !== 0) { numOfRows++; }

    for (let i = 0; i < numOfRows; i++) {
      allGames.push(this.mapRow(i));
    }

    return allGames;
  }


  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              Your Wish List
              <Button className="ml-5" onClick={this.toggleEdit}>{this.state.edit ? 'Save' : 'Edit'}</Button>
            </Card.Title>
            <Container fluid>
              {this.renderGames()}
            </Container>
          </Card.Body>
        </Card>
        {this.state.edit ? 
          <>
            <GameListSearchBar />
            <GameListSearchResultsList parent={'wish'}/>
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
    wishlistGames: state.wishlistGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveWishlistGames: (gamesArray) => dispatch(saveWishlistGames(gamesArray))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);