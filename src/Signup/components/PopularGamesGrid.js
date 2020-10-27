import React from 'react';
import { connect } from 'react-redux';
import { getPopularGames } from '../../actions/displayGamesActions';

class PopularGamesGrid extends React.Component {
  componentDidMount() {
    this.props.getPopularGames();
  }

  render(){
    return <p>{this.props.popularGames[0] && this.props.popularGames[0].rating}</p>
  }
}

const mapStateToProps = state => {
  return {
    popularGames: state.displayGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPopularGames: () => dispatch(getPopularGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularGamesGrid);