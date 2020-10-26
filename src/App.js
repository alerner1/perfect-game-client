import React from 'react';
import { connect } from 'react-redux';
import { getUser, setUser } from './actions/userActions';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.cykj9TRG4tsF6cmAfKknYwr6Byy6XKzRYFPNMG9zwEg')
    const token = localStorage.getItem("token");
    if (token) {
      console.log("got a token");
      this.props.getUser();
      this.props.history.push('/welcome');
    } else {
      console.log('no token')
      this.props.setUser({})
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <p>time to login!</p>} />
        <Route path="/signup" render={() => <p>time to sign up!</p>} />
        {/* hypothetically we could have the component below show a "loading" thing until there is a currentUser. if currentUser is an empty obj or whatever then reroute? */}
        <Route path="/welcome" render={() => <p>welcome {this.props.currentUser && this.props.currentUser.username}!</p>} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    setUser: dispatch(setUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
