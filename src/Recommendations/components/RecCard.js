import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { addShowGame } from '../../redux/actions/showGameActions';
import Image from 'react-bootstrap/Image';

class RecCard extends React.Component {
  handleClick = () => {
    this.props.addShowGame(this.props.game);
  }

  render() {
    if (Object.keys(this.props.game).length !== 0) {
      return ( 
        <Card onClick={this.handleClick} style={{cursor: "pointer"}}>
          <Card.Body className="p-0 d-flex flex-column">
            {/* <Card.Subtitle>
              {this.props.game.name}
            </Card.Subtitle> */}
            <Image fluid className="mt-auto" src={this.props.game.cover_url}>
            </Image>
          </Card.Body>
        </Card>
      )
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addShowGame: (gameObj) => dispatch(addShowGame(gameObj))
  }
}

export default connect(null, mapDispatchToProps)(RecCard);