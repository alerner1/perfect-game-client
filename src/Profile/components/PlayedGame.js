import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { changeUserPlayedGameLikeValue } from '../../actions/userPlayedGamesActions';

class PlayedGame extends React.Component {

  likeInfo = () => {
    if (this.props.likeValue > 0) {
      return <FaThumbsUp />
    } else if (this.props.likeValue < 0) {
      return <FaThumbsDown />
    }    
  }

  handleChange = (value) => {
    if (value === this.props.likeValue) {
      this.props.updateLikes(this.props.game, 0)
    } else {
      this.props.updateLikes(this.props.game, value)
    }
  }

  whichActive = () => {
    if (this.props.likeValue === 1) {
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
    } else if (this.props.likeValue === -1) {
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
        
        <Button onClick={this.handleClick}>
          <MdDelete />
        </Button>
      </>
    )
  }

  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-between">
        {this.props.game.name}
        <div>
          {this.props.edit ? 
            this.editButtons()
          :
            this.likeInfo()
            
          }
        </div>
        
      </ListGroup.Item>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked))
  }
}

export default connect(null, mapDispatchToProps)(PlayedGame);
