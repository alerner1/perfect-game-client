import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { changeUserPlayedGameLikeValue, markUserPlayedGameForDestruction } from '../../redux/actions/userPlayedGamesActions';
import { markDisplayGameForDestruction } from '../../redux/actions/gamesActions';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayedGameModal from './PlayedGameModal';

class PlayedGame extends React.Component {

  state = {
    destroy: false,
    showModal: false
  }

  likeInfo = () => {
    if (this.props.liked > 0) {
      return <h4 className="text-blue"><FaThumbsUp /></h4>
    } else if (this.props.liked < 0) {
      return <h4 className="text-blue"><FaThumbsDown /></h4>
    }    
  }

  handleChange = (value) => {
    if (value === this.props.liked) {
      this.props.updateLikes(this.props.game, 0)
    } else {
      this.props.updateLikes(this.props.game, value)
    }
  }

  handleDestroy = () => {
    this.props.markDisplayGameForDestruction(this.props.game)
    this.setState({destroy: true})
  }

  whichActive = () => {
    if (this.props.liked === 1) {
      return (
        <ButtonGroup>
          <Button value={1} onClick={() => this.handleChange(1)} active>
            <FaThumbsUp />
          </Button>
          <Button value={-1} onClick={() => this.handleChange(-1)}>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    } else if (this.props.liked === -1) {
      return (
        <ButtonGroup>
          <Button value={1} onClick={() => this.handleChange(1)}>
            <FaThumbsUp />
          </Button>
          <Button value={-1} onClick={() => this.handleChange(-1)} active>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    } else {
      return (
        <ButtonGroup>
          <Button value={1} onClick={() => this.handleChange(1)} >
            <FaThumbsUp />
          </Button>
          <Button value={-1} onClick={() => this.handleChange(-1)}>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    }
  }

  editButtons = () => {
    return (
      <>
        {this.whichActive()}
        
        <Button variant="danger" className="ml-1" onClick={this.handleDestroy}>
          <MdDelete />
        </Button>
      </>
    )
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
      this.state.destroy ? 
        null

        :
            <ListGroup.Item className="py-0">
            <PlayedGameModal showProp={this.state.showModal} game={this.props.game} closeModal={this.closeModal} />
            <Row>
              <Col xs={2}>
                <Image className="p-0" src={this.props.game.cover_url} style={{height: '20vh'}} thumbnail fluid />
              </Col>
              <Col>
                <Row>
                  <h4>{this.props.game.name} ({this.props.game.release_date})</h4>
                </Row>
                <Row>
                  <p>{this.props.game.summary.split(' ').slice(0, 31).join(' ') + '...'} <a onClick={this.showModal} href="#">(view more)</a></p>
                </Row>
              </Col>
              <Col xs={3} className="d-flex flex-row justify-content-center h-50">
                {this.props.edit ? 
                  this.editButtons()
                :
                  this.likeInfo()
                }
              </Col>
            </Row>
            
          </ListGroup.Item>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked)),
    markUserPlayedGameForDestruction: (gameObj) => dispatch(markUserPlayedGameForDestruction(gameObj)),
    markDisplayGameForDestruction: (gameObj) => dispatch(markDisplayGameForDestruction(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(PlayedGame);
