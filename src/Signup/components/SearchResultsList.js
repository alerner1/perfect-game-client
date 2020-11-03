import React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

class SearchResultsList extends React.Component {
  mapSearchResults = () => {
    return this.props.searchResults.map(result => { return <SearchResult key={result['id']} result={result} parent={this.props.parent} />})
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
    searchResults: state.games.searchResults.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
}

export default connect(mapStateToProps)(SearchResultsList);