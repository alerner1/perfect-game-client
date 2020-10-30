import React from 'react';
import RecsCarousel from '../components/RecsCarousel';
import GameInfoContainer from './GameInfoContainer';

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