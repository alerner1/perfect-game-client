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
  },
  userPlayedGames: [],
  playedGames: []
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
    case "ADD_GAMES":
      return {
        ...state,
        displayGames: action.payload
      }
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
    case "UPDATE_GAME_LIKE_VALUE":
      // update this later so it's comparing something unique like the id
      // need name for now because ids are complicated
      gameIndex = state.displayGames.findIndex(game => { return game.name === action.payload.game.name });
      newList = state.displayGames.slice();
      newList[gameIndex]['liked'] = action.payload.liked;
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

function userPlayedGamesReducer(state = defaultState.userPlayedGames, action) {
  let gameInArr;
  let gameIndex;
  let newList;
  switch(action.type){
    case "ADD_USER_PLAYED_GAMES":
      return action.payload
    case "CHANGE_USER_PLAYED_GAME_LIKE_VALUE":
      let copyOfState = [...state]
      gameInArr = copyOfState.filter(game => {return action.payload.game.id === game.game_id})
      gameIndex = copyOfState.indexOf(gameInArr[0]);
      newList = [...state];
      newList[gameIndex]['liked'] = action.payload.liked;
      newList[gameIndex]['changed'] = true;
      return newList
    case "MARK_USER_PLAYED_GAME_FOR_DESTRUCTION":
      gameInArr = [...state].filter(game => {return action.payload.id === game.game_id});
      gameIndex = state.indexOf(gameInArr[0]);
      newList = [...state];
      newList[gameIndex]['destroy'] = true;
    default:
      return state;
  }
}

function playedGamesReducer(state = defaultState.playedGames, action) {
  switch(action.type){
    case "ADD_PLAYED_GAMES":
      return action.payload;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  userPlayedGames: userPlayedGamesReducer,
  playedGames: playedGamesReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;