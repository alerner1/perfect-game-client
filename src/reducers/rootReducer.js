import { combineReducers } from 'redux';

const defaultState = {
  user: { 
    currentUser: {},
    signupStep: 0,
    requesting: false
  },
  games: {
    displayGames: [],
    requesting: false
  }
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

function gamesReducer(state = defaultState.games, action) {
  switch(action.type){
    // case "ADD_GAME_REQUEST":
    //   return {
    //     ...state,
    //     requesting: true
    //   }
    case "ADD_GAME":
      return {
        ...state,
        displayGames: [...state.displayGames, action.payload]
      };
    case "CLEAR_GAMES":
      return {
        ...state,
        displayGames: []
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer
});

export default rootReducer;