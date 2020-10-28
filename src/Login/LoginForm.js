import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { loginUser } from '../actions/userActions';
import { Redirect, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state);
  };

  clickHandler = e => {
    e.preventDefault();
    this.props.history.push('/signup')
  }

  render() {
    return(
      !this.props.currentUser || Object.keys(this.props.currentUser).length === 0 ?
      <Form onSubmit={this.handleSubmit} className="w-50 mx-auto mt-5">
        <h3 className="text-center">Discover the Perfect Game</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Password" />
        </Form.Group>
        <Button block variant="primary" type="submit">
          Submit
        </Button>
        <p>New here? <a onClick={this.clickHandler} href="/signup">Create Account.</a></p>
      </Form>
      :
      <Redirect to="/welcome" />
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
    loginUser: formData => dispatch(loginUser(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));