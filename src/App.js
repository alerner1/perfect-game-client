import React from 'react';
import { connect } from 'react-redux';
import { getUser, setUser } from './actions/userActions';

class App extends React.Component {
  componentDidMount() {
    localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.vovyPPgUXMQ2JSXjgIE8CrdlfWu-9c2q-wwr6rrrR4A')
    const token = localStorage.getItem("token");
    if (token) {
      console.log("got a token");
      this.props.getUser();
    } else {
      console.log('no token')
      this.props.setUser({})
    }
  }

  render() {
    return <p>hello!</p>
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    setUser: dispatch(setUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
