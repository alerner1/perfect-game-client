import { combineReducers } from 'redux';

const defaultState = {
  user: { 
    currentUser: {},
    signupStep: 0,
    requesting: false
  },
  displayGames: []
};

function userReducer(state = defaultState.user, action) {
  switch(action.type){
    case "GET_USER_REQUEST":
      return {
        ...state,
        currentUser: state.currentUser,
        requesting: true
      }

    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
        requesting: false
      };

    case "INCREMENT_SIGNUP_STEP":
      return {
        ...state,
        signupStep: state.signupStep + 1
      };

    default: 
      return state;
  }
}

function gamesReducer(state = defaultState.displayGames, action) {
  switch(action.type){
    case "ADD_GAME":
      console.log('adding game')
      return [...state, action.payload];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  displayGames: gamesReducer
});

export default rootReducer;