import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { incrementSignupStep, getUser } from '../../redux/actions/userActions';

class ContinueButton extends React.Component {
  handleClick = () => {
    this.saveLikedGames();
    this.props.incrementSignupStep();
  }

  saveLikedGames = () => {
    const token = localStorage.getItem("token");
    for (let game of this.props.likedGames) {
      fetch(`https://the-perfect-game-backend.herokuapp.com/api/v1/user_played_games`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          liked: 1,
          game: {
            igdb_id: game['igdb_id']
          }
        })
      })
      .then(resp => {
        resp.json()
      })
      .then(() => this.props.getUser())
    }   
  }

  render(){
    return <Button onClick={this.handleClick} className='float-right mr-2'>Save and Continue</Button>
  }
}

const mapStateToProps = state => {
  return {
    likedGames: state.games.displayGames.filter(game => game['liked'] === 1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementSignupStep: () => dispatch(incrementSignupStep()),
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContinueButton);

