import React from 'react';
import SignupForm from '../components/SignupForm';
import { connect } from 'react-redux';
import PopularGamesContainer from '../containers/PopularGamesContainer';
import CustomLikedGamesContainer from '../containers/CustomLikedGamesContainer';
import { withRouter } from 'react-router-dom';

class SignupContainer extends React.Component {
  signupStep = () => {
    switch(this.props.signupStep){
      case 0:
        return <SignupForm />;
      case 1:
        return <PopularGamesContainer />;
      case 2:
        return <CustomLikedGamesContainer />;
      default:
        return <SignupForm />;
    }
  }

  componentDidUpdate() {
    if (this.props.signupStep > 2) {
      this.props.history.push('/game_lists/played_games')
    }
  }

  render(){
    return(this.signupStep())
  }
}

const mapStateToProps = state => {
  return {
    signupStep: state.user.signupStep
  }
}

export default connect(mapStateToProps)(withRouter(SignupContainer))