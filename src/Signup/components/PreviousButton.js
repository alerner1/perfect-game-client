import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { decrementSignupStep } from '../../actions/userActions';

class PreviousButton extends React.Component {
  handleClick = () => {
    this.props.decrementSignupStep();
  }

  render(){
    return <Button onClick={this.handleClick} className='float-left ml-2'>Previous</Button>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrementSignupStep: () => dispatch(decrementSignupStep())
  }
}

export default connect(null, mapDispatchToProps)(PreviousButton);