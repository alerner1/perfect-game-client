import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class PlayedGame extends React.Component {
  state = {
    value: [this.props.game.liked]
  }

  likeInfo = () => {
    if (this.props.game.liked > 0) {
      return <FaThumbsUp />
    } else if (this.props.game.liked < 0) {
      return <FaThumbsDown />
    }    
  }

  handleChange = () => {
    console.log('event')
  }

  whichActive = () => {
    if (this.props.game.liked === 1) {
      return (
        <ButtonGroup>
          <Button onClick={event => this.handleChange(event)} active>
            like
            {/* <FaThumbsUp onClick={event => this.handleChange(event)} /> */}
          </Button>
          <Button onClick={this.handleChange}>
            <FaThumbsDown onClick={event => this.handleChange(event)}/>
          </Button>
        </ButtonGroup>
      )
    } else if (this.props.game.liked === -1) {
      return (
        <ButtonGroup>
          <Button >
            <FaThumbsUp />
          </Button>
          <Button onClick={this.handleChange} active>
            <FaThumbsDown />
          </Button>
        </ButtonGroup>
      )
    } else {
      return (
        <ButtonGroup>
          <Button onClick={this.handleChange} >
            <FaThumbsUp />
          </Button>
          <Button onClick={this.handleChange}>
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
          {/* <MdDelete /> */}
          delete
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

export default PlayedGame;
