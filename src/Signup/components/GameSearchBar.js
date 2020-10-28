import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { updateSearchQuery, getSearchResults } from '../../actions/gamesActions';
import Button from 'react-bootstrap/Button';

class GameSearchBar extends React.Component {
  handleChange = event => {
    this.props.updateSearchQuery(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.getSearchResults(this.props.search)
  }

  render(){
    return(
      <Col>
        <Form inline onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicSearch">
            <Form.Label>Search Games: </Form.Label>
            <Form.Control name="search" onChange={this.handleChange} type="text" value={this.props.search} placeholder="Search for a game you like" />
          </Form.Group>
          <Button type="submit">Search</Button>
        </Form>
      </Col>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.games.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearchQuery: (query) => dispatch(updateSearchQuery(query)),
    getSearchResults: (query) => dispatch(getSearchResults(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSearchBar);