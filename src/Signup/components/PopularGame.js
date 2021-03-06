import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class PopularGame extends React.Component {
  state = {
    liked: this.props.game.liked
  }
  
  handleClick = () => {
    this.props.handleClick(this.props.game)
    if (this.state.liked === 0) {
      this.setState({liked: 1});
    } else {
      this.setState({liked: 0});
    }
  }

  render() {
    return (
      <Col xs={2}>
        <Card style={{ 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'contain', 
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, ${this.state.liked ? '0.5' : '0.0'}), 
            rgba(0, 0, 0, ${this.state.liked === 1 ? '0.5' : '0.0'})), 
            url(${this.props.game['cover_url']})
          ` }}>
          <Card.Img 
            style={{cursor: 'pointer', opacity: 0.0}} 
            onClick={this.handleClick} 
            variant="bottom" 
            src={this.props.game['cover_url']} />
        </Card>
      </Col>
    )
  }
}

export default PopularGame;