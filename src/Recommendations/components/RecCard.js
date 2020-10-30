import React from 'react';
import Card from 'react-bootstrap/Card';

class RecCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            {this.props.game}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default RecCard;