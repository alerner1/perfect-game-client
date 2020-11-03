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

class SavedRecommendationsList extends React.Component {
  state = {
    edit: false
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

  mapRow = row => {
    const thisRow = this.props.savedRecsGames.filter(game => {
      return this.props.savedRecsGames.indexOf(game) >= row * 5 && this.props.savedRecsGames.indexOf(game) < (row + 1) * 5;
    });

    return (
      <Row noGutters key={row}>
        <Col xs={1}>
        </Col>
        {thisRow.map(game => <GameCard key={game.igdb_id} game={game} />)}
        <Col xs={1}>
        </Col>
      </Row>
    )
  }

  renderGames = () => {
    let numOfRows = parseInt(this.props.savedRecsGames.length / 5, 10);
    const allGames = [];

    if (this.props.savedRecsGames.length % 5 !== 0) { numOfRows++; }

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
              Saved Recommendations
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
            <GameListSearchResultsList parent={'saved'}/>
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