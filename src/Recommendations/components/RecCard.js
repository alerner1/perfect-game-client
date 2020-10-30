import React from 'react';
import Card from 'react-bootstrap/Card';

class RecCard extends React.Component {
  render() {
    return (
      <Card style={{cursor: "pointer", height: "100%"}}>
        <Card.Body>
          <Card.Subtitle>
            {this.props.game.name}
          </Card.Subtitle>
          <Card.Img variant="bottom" src={this.props.game.cover_url}>
          </Card.Img>
        </Card.Body>
      </Card>
    )
  }
}

export default RecCard;