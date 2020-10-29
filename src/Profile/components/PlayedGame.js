import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { changeUserPlayedGameLikeValue } from '../../actions/userPlayedGamesActions';

class PlayedGame extends React.Component {
  // state = {
  //   value: [this.props.likeValue]
  // }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    if (prevProps !== this.props) {
      this.whichActive()
    }
  }

  likeInfo = () => {
    if (this.props.likeValue > 0) {
      return <FaThumbsUp />
    } else if (this.props.likeValue < 0) {
      return <FaThumbsDown />
    }    
  }

  handleChange = (event) => {
    if (event === this.props.likeValue) {
      this.props.updateLikes(this.props.game, 0)

      // ok... this works in terms of changing state, but it is once again not fetching. why????

      // also we still have to update the backend (on save i guess). so annoying.
    } else {
      // do a fetch to update the user played game's liked thingy to the same as event.target.value (via another if statement) and then get user again orrrr update it in state and then do the fetch to correspond
    }
  }

  whichActive = () => {
    if (this.props.likeValue === 1) {
      return (
        <ButtonGroup>
          <Button value={1} onClick={() => this.handleChange(1)} active>
            <FaThumbsUp />
          </Button>
          <Button value={-1} onClick={this.handleChange}>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    } else if (this.props.likeValue === -1) {
      return (
        <ButtonGroup>
          <Button value={1}>
            <FaThumbsUp />
          </Button>
          <Button value={-1} onClick={this.handleChange} active>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    } else {
      return (
        <ButtonGroup>
          <Button value={1} onClick={this.handleChange} >
            <FaThumbsUp />
          </Button>
          <Button value={-1} onClick={this.handleChange}>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    }
  }

  handleClick = () => {
    console.log('clicked')
  }

  // make it so you can't have both buttons checked but you can have none
  // also when you click them it should do a fetch request and stuff
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
