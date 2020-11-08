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
import { saveWishlistGames } from '../../redux/actions/wishlistGamesActions';
import { clearSearchResults } from '../../redux/actions/gamesActions';
import ListGroup from 'react-bootstrap/ListGroup';
import AddGameModal from '../../Profile/components/AddGameModal';
import PlayedGame from '../../Profile/components/PlayedGame';

class WishList extends React.Component {
  state = {
    edit: false,
    showModal: false
  }

  toggleEdit = () => {
    this.setState(prev => ({ edit: !prev.edit }), () => {
      if (this.state.edit === false) {
        this.props.saveWishlistGames(this.props.wishlistGames);
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

  renderGames = () => {
    return this.props.wishlistGames.map(game => {
      return <GameCard key={game.id} game={game} edit={this.state.edit} parent='wish' />
    })
  }


  render() {
    return (
      <>
        <Container className="mt-3 mx-auto" style={{width: '75vw'}}>
            <AddGameModal showProp={this.state.showModal} closeModal={this.closeModal} parent="wish" />
            <Row>
              <Col xs={2}></Col>
              <Col>
                <h3 className="text-center">
                  Your Wish List
                </h3>
              </Col>
              <Col xs={3}>
                <Button className="ml-3 float-right" onClick={this.toggleEdit}>{this.state.edit ? 'Save' : 'Edit'}</Button>
                {this.state.edit ? <Button onClick={this.showModal} className="float-right">Add Game</Button> : null }
              </Col>
            </Row>
            <ListGroup className="mt-3" style={{height: '75vh', overflow: 'auto'}}>
              {this.renderGames()}
            </ListGroup>
          
        </Container>        
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishlistGames: state.wishlistGames.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveWishlistGames: (gamesArray) => dispatch(saveWishlistGames(gamesArray)),
    clearSearchResults: () => dispatch(clearSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);