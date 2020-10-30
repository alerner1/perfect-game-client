import React from 'react';
import { connect } from 'react-redux';

// we'll want some sort of "save" button and functionality in here, but we're not quite there yet
class GameInfo extends React.Component {
  render(){
    return(
      <p className="text-center">{this.props.showGame.name}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    showGame: state.showGame
  }
}

export default connect(mapStateToProps)(GameInfo);