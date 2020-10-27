import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { incrementSignupStep } from '../../actions/userActions';

class ContinueButton extends React.Component {
  handleClick = () => {
    this.props.incrementSignupStep();

    this.saveLikedGames();
  }

  saveLikedGames = () => {
    const token = localStorage.getItem("token")
    for (let game of this.props.likedGames) {
      fetch('http://localhost:3000/api/v1/user_played_games', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          game_id: game['id'],
          liked: 1
        })
      })
      .then(resp => resp.json())
      .then(console.log)
    }   
  }

  render(){
    return <Button onClick={this.handleClick} className='float-right mr-2'>Next</Button>
  }
}

const mapStateToProps = state => {
  return {
    likedGames: state.games.displayGames.filter(game => game['liked'] === true)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementSignupStep: () => dispatch(incrementSignupStep())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContinueButton);