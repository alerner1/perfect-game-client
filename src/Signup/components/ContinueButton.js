import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { incrementSignupStep } from '../../actions/userActions';

class ContinueButton extends React.Component {
  handleClick = () => {
    this.props.incrementSignupStep();
  }

  render(){
    return <Button onClick={this.handleClick} className='float-right mr-2'>Next</Button>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementSignupStep: () => dispatch(incrementSignupStep())
  }
}

export default connect(null, mapDispatchToProps)(ContinueButton);