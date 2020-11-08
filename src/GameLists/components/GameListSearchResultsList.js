import React from 'react';
import GameListSearchResult from './GameListSearchResult';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

class GameListSearchResultsList extends React.Component {
  // mapSearchResults = () => {
  //   return this.props.searchResults.map(result => { return <GameListSearchResult key={result['id']} result={result} parent={this.props.parent} />})
  // }

  mapSearchResults = () => {
    const filteredResults = this.props.searchResults.filter(game => {
      let found = false;
      let gameList;
      switch(this.props.parent) {
        case "owned":
          gameList = this.props.ownedGames;
          break;
        case "wish":
          gameList = this.props.wishlistGames;
          break;
        case "saved":
          gameList = this.props.savedRecsGames;
          break;
        default:
          break;
      }

      for (let listGame of gameList) {
        if (listGame.name === game.name) {
          found = true;
        }
      }
      if (found === false) {
        return game
      }
    })

    return filteredResults.map(result => { return <GameListSearchResult key={result['igdb_id']} result={result} parent={this.props.parent} />})
  }

  render() {
    return (
      <ListGroup>
        {this.mapSearchResults()}
      </ListGroup>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.games.searchResults.sort((a, b) => (a.name > b.name) ? 1 : -1),
    ownedGames: state.ownedGames,
    wishlistGames: state.wishlistGames,
    savedRecsGames: state.savedRecsGames
  }
}

export default connect(mapStateToProps)(GameListSearchResultsList);