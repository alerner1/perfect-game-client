import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { changeUserPlayedGameLikeValue, markUserPlayedGameForDestruction } from '../../actions/userPlayedGamesActions';
import{ markDisplayGameForDestruction } from '../../actions/gamesActions';

class PlayedGame extends React.Component {

  state = {
    destroy: false
  }

  likeInfo = () => {
    if (this.props.liked > 0) {
      return <FaThumbsUp />
    } else if (this.props.liked < 0) {
      return <FaThumbsDown />
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
        
        <Button onClick={this.handleDestroy}>
          <MdDelete />
        </Button>
      </>
    )
  }

  render() {
    return (
      this.state.destroy ? 
        null

        :

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
    changeUserPlayedGameLikeValue: (gameObj, liked) => dispatch(changeUserPlayedGameLikeValue(gameObj, liked)),
    markUserPlayedGameForDestruction: (gameObj) => dispatch(markUserPlayedGameForDestruction(gameObj)),
    markDisplayGameForDestruction: (gameObj) => dispatch(markDisplayGameForDestruction(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(PlayedGame);
