import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { createUser } from '../../actions/userActions';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  state = {
    userData: {
      email: '',
      password: '',
    },
    confirmPassword: ''
  };

  handleChange = event => {
    if (event.target.name === 'confirm-password') {
      this.setState({
        confirmPassword: event.target.value
      });
    } else {
      this.setState({
        userData: {
          ...this.state.userData,
          [event.target.name]: event.target.value
        }
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state.userData);
  };

  render() {
    return(
      // !this.props.currentUser ?
      <Form onSubmit={this.handleSubmit} className="w-50 mx-auto mt-5">
        <h3 className="text-center">Create Account</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={this.handleChange} value={this.state.userData.email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={this.handleChange} value={this.state.userData.password} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control name="confirm-password" onChange={this.handleChange} value={this.state.confirmPassword} type="password" placeholder="Confirm Password" />
          <Form.Text id="passwordHelpBlock" muted>
            {this.state.confirmPassword !== '' && this.state.userData.password !== this.state.confirmPassword ? 'Passwords do not match!' : null }
          </Form.Text>
        </Form.Group>
        <Button block variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      // :
      // <Redirect to="/welcome" />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: formData => dispatch(createUser(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));