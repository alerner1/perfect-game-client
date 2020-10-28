import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { likeGame, unlikeGame } from '../../actions/gamesActions';
import { connect } from 'react-redux';

class PopularGame extends React.Component {
  state = {
    liked: this.props.game.liked
  }
  
  handleClick = () => {
    this.props.handleClick(this.props.game)
    // i have absolutely no idea why this component doesn't rerender when the liked state changes via the dispatch from the parent component. i give up.  
    this.setState(prev => ({liked: !prev.liked}))
  }

  render() {
    return (
      <Col xs={2}>
        <Card style={{ 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'contain', 
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, ${this.state.liked ? '0.5' : '0.0'}), 
            rgba(0, 0, 0, ${this.state.liked ? '0.5' : '0.0'})), 
            url(${this.props.game['cover']['url']})
          ` }}>
          <Card.Img 
            style={{cursor: 'pointer', opacity: 0.0}} 
            onClick={this.handleClick} 
            variant="bottom" 
            src={this.props.game['cover']['url']} />
        </Card>
      </Col>
    )
  }
}

export default PopularGame;