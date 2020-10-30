import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addSavedRecsGame, saveSavedRecsGames } from '../../redux/actions/savedRecsGamesActions';

// we'll want some sort of "save" button and functionality in here, but we're not quite there yet
class GameInfo extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.savedRecsGames !== this.props.savedRecsGames) {
      this.props.saveSavedRecsGames(this.props.savedRecsGames);
    }
  }

  handleSave = () => {
    this.props.addSavedRecsGame(this.props.showGame);
  }

  chooseButton = () => {
    if (this.props.savedRecsGames.filter(game => {return game.name === this.props.showGame.name}).length > 0) {
      return <Button disabled>Saved</Button>
    } else {
      return <Button onClick={this.handleSave}>Save</Button>
    }
  }

  render(){
    return(
      <>
        <p className="text-center">{this.props.showGame.name}</p>
        {this.chooseButton()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    showGame: state.showGame,
    savedRecsGames: state.savedRecsGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSavedRecsGame: (gameObj) => dispatch(addSavedRecsGame(gameObj)),
    saveSavedRecsGames: (gamesArray) => dispatch(saveSavedRecsGames(gamesArray))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);