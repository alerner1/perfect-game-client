import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import OwnedList from '../components/OwnedList';
import WishList from '../components/WishList';
import SavedRecommendationsList from '../components/SavedRecommendationsList';

class GameListContainer extends React.Component {
  chooseList = () => {
    if (this.props.list === 'owned'){
      return <OwnedList />
    } else if (this.props.list === 'wish'){
      return <WishList />
    } else {
      return <SavedRecommendationsList />
    }
  }

  render() {
    return(
      <Container>
        {this.chooseList()}
      </Container>
    )
  }
}

export default GameListContainer;