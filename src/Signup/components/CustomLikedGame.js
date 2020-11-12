import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {MdDelete} from 'react-icons/md';

class CustomLikedGame extends React.Component {
  handleClick = () => {
    this.props.handleRemove(this.props.game)
  }

  render(){
    return (
      <ListGroup.Item>
        {this.props.game.name} {this.props.game.first_release_date ? `(${this.props.game.first_release_date})` : null }
        <Button variant="danger" className="float-right" onClick={this.handleClick}><MdDelete /></Button>
      </ListGroup.Item>
    )
  }
}

export default CustomLikedGame;