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
import { saveSavedRecsGames } from '../../redux/actions/savedRecsGamesActions';
import { clearSearchResults } from '../../redux/actions/gamesActions';
import ListGroup from 'react-bootstrap/ListGroup';
import AddGameModal from '../../Profile/components/AddGameModal';

class SavedRecommendationsList extends React.Component {
  state = {
    edit: false,
    showModal: false
  }

  toggleEdit = () => {
    this.setState(prev => ({ edit: !prev.edit }), () => {
      if (this.state.edit === false) {
        this.props.saveSavedRecsGames(this.props.savedRecsGames);
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
    return this.props.savedRecsGames.map(game => {
      return <GameCard key={game.id} game={game} edit={this.state.edit} parent='saved' />
    })
  }


  render() {
    return (
      <>
        <Container className="mt-3 mx-auto" style={{width: '75vw'}}>
            <Row>
              <Col xs={3}></Col>
              <Col>
                <h3 className="text-center">
                  Your Saved Recommendations
                </h3>
              </Col>
              <Col xs={3}>
                <Button className="ml-3 float-right" onClick={this.toggleEdit}>{this.state.edit ? 'Save' : 'Edit'}</Button>
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
    savedRecsGames: state.savedRecsGames.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveSavedRecsGames: (gamesArray) => dispatch(saveSavedRecsGames(gamesArray)),
    clearSearchResults: () => dispatch(clearSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecommendationsList);