import React from 'react';
import GameListSearchResult from './GameListSearchResult';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

class GameListSearchResultsList extends React.Component {
  mapSearchResults = () => {
    return this.props.searchResults.map(result => { return <GameListSearchResult key={result['id']} result={result} />})
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
    searchResults: state.games.searchResults
  }
}

export default connect(mapStateToProps)(GameListSearchResultsList);