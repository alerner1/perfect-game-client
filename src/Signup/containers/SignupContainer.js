import React from 'react';
import SignupForm from '../components/SignupForm';
import { connect } from 'react-redux';
import PopularGamesGrid from '../components/PopularGamesGrid';

class SignupContainer extends React.Component {
  signupStep = () => {
    switch(this.props.signupStep){
      case 0:
        return <SignupForm />;
      case 1:
        return <PopularGamesGrid />;
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