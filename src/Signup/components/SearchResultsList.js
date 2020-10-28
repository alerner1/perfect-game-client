import React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

class SearchResultsList extends React.Component {
  mapSearchResults = () => {
    return this.props.searchResults.map(result => { return <SearchResult result={result} />})
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

export default connect(mapStateToProps)(SearchResultsList);