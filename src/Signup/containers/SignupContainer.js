import React from 'react';
import SignupForm from '../components/SignupForm';
import { connect } from 'react-redux';
import PopularGamesContainer from '../containers/PopularGamesContainer';
import CustomLikedGamesContainer from '../containers/CustomLikedGamesContainer';

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

  render(){
    return(this.signupStep())
  }
}

const mapStateToProps = state => {
  return {
    signupStep: state.user.signupStep
  }
}

export default connect(mapStateToProps)(SignupContainer)