import React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

class SearchResultsList extends React.Component {
  mapSearchResults = () => {
    const filteredResults = this.props.searchResults.filter(game => {
      let found = false;
      for (let displayGame of this.props.displayGames) {
        if (displayGame.name === game.name) {
          found = true;
        }
      }
      if (found === false) {
        return game
      }
    })

    return filteredResults.map(result => { return <SearchResult key={result['igdb_id']} result={result} parent={this.props.parent} />})
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
    displayGames: state.games.displayGames
  }
}

export default connect(mapStateToProps)(SearchResultsList);