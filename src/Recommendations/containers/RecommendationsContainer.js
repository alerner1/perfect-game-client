import React from 'react';
import RecsCarousel from '../components/RecsCarousel';
import GameInfoContainer from './GameInfoContainer';
import { connect } from 'react-redux';
import { getQuickRecommendations } from '../../redux/actions/recommendedGamesActions';

class RecommendationsContainer extends React.Component {

  render(){
    return(
      <>
        <RecsCarousel />
        <GameInfoContainer />
      </>
    )
  }
}

export default RecommendationsContainer;