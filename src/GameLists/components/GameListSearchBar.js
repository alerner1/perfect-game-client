import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { updateSearchQuery, getSearchResults, clearSearchResults } from '../../redux/actions/gamesActions';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GameSearchBar extends React.Component {
  handleChange = event => {
    this.props.updateSearchQuery(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.clearSearchResults()
    this.props.getSearchResults(this.props.search)
    this.props.updateSearchQuery('')
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicSearch">
          <Row noGutters>
            <Col xs={2}>
            </Col>
            <Col className='pr-1'>
              <Form.Control name="search" onChange={this.handleChange} type="text" value={this.props.search} placeholder="Search for a game" />
            </Col>
            <Col xs={2}>
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
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
    getSearchResults: (query) => dispatch(getSearchResults(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSearchBar);