import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PlayedGameModal from '../../Profile/components/PlayedGameModal';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import { markSavedRecsGameForDestruction } from '../../redux/actions/savedRecsGamesActions';
import { connect } from 'react-redux';

class GameCard extends React.Component {
  state = {
    showModal: false,
    destroy: false
  }

  showModal = event => {
    event.preventDefault();
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  handleDestroy = () => {
    this.props.markSavedRecsGameForDestruction(this.props.game)
    this.setState({destroy: true})
  }

  render() {
    return (
      this.state.destroy ? 
      null
      :
      <ListGroup.Item className="py-0">
        <PlayedGameModal showProp={this.state.showModal} game={this.props.game} closeModal={this.closeModal} />
        <Row>
          <Col xs={2}>
            <Image className="p-0" src={this.props.game.cover_url} style={{ height: '20vh' }} thumbnail fluid />
          </Col>
          <Col>
            <Row>
              <h4>{this.props.game.name} ({this.props.game.release_date})</h4>
            </Row>
            <Row>
              <p>{this.props.game.summary && this.props.game.summary.split(' ').slice(0, 50).join(' ') + '...'} <a onClick={this.showModal} href="#">(view more)</a></p>
            </Row>
          </Col>
          <Col xs={1} className="d-flex flex-row justify-content-center h-50">
                {this.props.edit ? 
                  <Button variant="danger" onClick={this.handleDestroy} >
                    <MdDelete />
                  </Button>
                :
                  null
                }
              </Col>
        </Row>

      </ListGroup.Item>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    markSavedRecsGameForDestruction: (gameObj) => dispatch(markSavedRecsGameForDestruction(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(GameCard);