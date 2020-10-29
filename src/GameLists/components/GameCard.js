import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class GameCard extends React.Component {
  render() {
    return (
      <Col xs={2}>
        <Card>
          <Card.Img 
            style={{cursor: 'pointer', opacity: 1.0}} 
            variant="bottom" 
            src={ this.props.game['cover'] && this.props.game['cover']['url'] || this.props.game['cover_url']} />
        </Card>
      </Col>
    )
  }
}

export default GameCard;