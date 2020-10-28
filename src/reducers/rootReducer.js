import { combineReducers } from 'redux';

const defaultState = {
  user: { 
    currentUser: {},
    signupStep: 0,
    requesting: false
  },
  games: {
    displayGames: [],
    requesting: false,
    search: '',
    searchResults: []
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
        requesting: false,
      };

    case "INCREMENT_SIGNUP_STEP":
      return {
        ...state,
        signupStep: state.signupStep + 1
      };
    
    case "DECREMENT_SIGNUP_STEP":
      return {
        ...state,
        signupStep: state.signupStep - 1
      };
    case "RESET_SIGNUP_STEP":
      return {
        ...state,
        signupStep: 0
      }
    case "RESET_USER":
      return defaultState.user
    default: 
      return state;
  }
}

function gamesReducer(state = defaultState.games, action) {
  let gameIndex;
  let newList;
  switch(action.type){
    case "ADD_GAME":
      return {
        ...state,
        displayGames: [...state.displayGames, action.payload]
      };
    case "LIKE_GAME":
      gameIndex = state.displayGames.indexOf(action.payload);
      newList = state.displayGames.slice();
      newList[gameIndex]['liked'] = true;
      return {
        ...state,
        displayGames: newList
      }
    case "UNLIKE_GAME":
      gameIndex = state.displayGames.indexOf(action.payload);
      newList = state.displayGames.slice();
      newList[gameIndex]['liked'] = false;
      return {
        ...state,
        displayGames: newList
      }
    case "CLEAR_GAMES":
      return {
        ...state,
        displayGames: []
      }
    case "UPDATE_SEARCH_QUERY":
      return {
        ...state,
        search: action.payload
      }
    case "ADD_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload
      }
    case "CLEAR_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: []
      }
    case "RESET_GAMES":
      return defaultState.games;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer
});

export default rootReducer;