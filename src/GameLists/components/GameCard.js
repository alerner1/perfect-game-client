import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PlayedGameModal from '../../Profile/components/PlayedGameModal';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class GameCard extends React.Component {
  state = {
    showModal: false
  }

  showModal = event => {
    event.preventDefault();
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
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
        </Row>

      </ListGroup.Item>
    )
  }
}

export default GameCard;