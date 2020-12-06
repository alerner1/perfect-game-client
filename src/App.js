import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/actions/userActions';
import { Route, Switch, useHistory } from 'react-router-dom';
import NavMenuContainer from './NavMenu/containers/NavMenuContainer';
import LoginForm from './Login/LoginForm';
import SignupContainer from './Signup/containers/SignupContainer';
import ProfileContainer from './Profile/containers/ProfileContainer';
import GameListContainer from './GameLists/containers/GameListContainer';
import RecommendationsContainer from './Recommendations/containers/RecommendationsContainer';
import AdvancedRecsFormContainer from './Recommendations/containers/AdvancedRecsFormContainer';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUser());
      history.push('/game_lists/played_games');
    } else {
      history.push('/login');
    }
  }, []); 

  return (
    <div>
      <NavMenuContainer />
      <Switch>
        <Route path="/login" render={() => <LoginForm />} />
        <Route path="/signup" render={() => <SignupContainer />} />
        <Route path="/game_lists/played_games" render={() => <ProfileContainer />} />
        <Route path="/game_lists/owned_games" render={() => <GameListContainer list="owned" />} />
        <Route path="/game_lists/wishlist" render={() => <GameListContainer list="wish" />} />
        <Route path="/game_lists/saved_recommendations" render={() => <GameListContainer list="saved" />} />
        <Route path="/quick_recommendations" render={() => <RecommendationsContainer />} />
        <Route path="/advanced_recommendations/new" render={() => <AdvancedRecsFormContainer />} />
        <Route path="/advanced_recommendations" render={() => <RecommendationsContainer />} />
      </Switch>
    </div>
  )
}

export default App;
