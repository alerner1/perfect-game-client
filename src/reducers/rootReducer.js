import { combineReducers } from 'redux';

const defaultState = {
  user: { 
    currentUser: {},
    requesting: false
  }
};

function userReducer(state = defaultState.user, action) {
  switch(action.type){
    case "GET_USER":
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

    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;