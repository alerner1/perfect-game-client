import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { addShowGame } from '../../redux/actions/showGameActions';

class RecCard extends React.Component {
  handleClick = () => {
    this.props.addShowGame(this.props.game);
  }

  render() {
    return (
      <Card onClick={this.handleClick} style={{cursor: "pointer", height: "100%"}}>
        <Card.Body className="h-100 d-flex flex-column">
          <Card.Subtitle>
            {this.props.game.name}
          </Card.Subtitle>
          <Card.Img variant="bottom" className="mt-auto" src={this.props.game.cover_url}>
          </Card.Img>
        </Card.Body>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addShowGame: (gameObj) => dispatch(addShowGame(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(RecCard);