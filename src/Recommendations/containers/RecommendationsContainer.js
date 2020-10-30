import React from 'react';
import RecsCarousel from '../components/RecsCarousel';
import GameInfoContainer from './GameInfoContainer';
import { connect } from 'react-redux';
import { getQuickRecommendations } from '../../redux/actions/recommendedGamesActions';

class RecommendationsContainer extends React.Component {
  componentDidMount() {
    this.props.getQuickRecommendations();
  }

  render(){
    return(
      <>
        <RecsCarousel />
        <GameInfoContainer />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuickRecommendations: () => dispatch(getQuickRecommendations())
  }
}

export default connect(null, mapDispatchToProps)(RecommendationsContainer);