import React from 'react';
import { connect } from 'react-redux';
import { getUser, setUser } from './actions/userActions';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavMenuContainer from './NavMenu/containers/NavMenuContainer';
import LoginForm from './Login/LoginForm';
import SignupContainer from './Signup/containers/SignupContainer';
import ProfileContainer from './Profile/containers/ProfileContainer';
import GameListContainer from './GameLists/containers/GameListContainer';

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("got a token");
      this.props.getUser();
      // this.props.history.push('/profile');
    } else {
      console.log('no token')
    }
  }

  render() {
    return (
      <div>
        <NavMenuContainer />
        <Switch>
          <Route path="/login" render={() => <LoginForm />} />
          <Route path="/signup" render={() => <SignupContainer />} />
          {/* hypothetically we could have the component below show a "loading" thing until there is a currentUser. if currentUser is an empty obj or whatever then reroute? */}
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/game_lists/owned_games" render={() => <GameListContainer list="owned" />} />
          <Route path="/game_lists/wishlist" render={() => <GameListContainer list="wish" />} />
          <Route path="/game_lists/saved_recommendations" render={() => <GameListContainer list="saved" />} />
        </Switch>
      </div>
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
    setUser: () => dispatch(setUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
