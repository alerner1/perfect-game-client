export function createUser(formData) {
  return (dispatch) => {
    fetch('https://the-perfect-game-backend.herokuapp.com/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user: formData
      })
    })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: 'SET_USER', payload: {
          id: json.user.id,
          email: json.user.email,
          steam_name: json.user.steam_name,
          steam_id: json.user.steam_id
        } });
        dispatch({ type: 'INCREMENT_SIGNUP_STEP'});
        dispatch({ type: 'ADD_USER_PLAYED_GAMES', payload: json.user['user_played_games'] })
        dispatch({ type: 'ADD_PLAYED_GAMES', payload: json.user['played_games'] })
        dispatch({ type: 'ADD_OWNED_GAMES', payload: json.user['owned_games'] })
        dispatch({ type: 'ADD_WISHLIST_GAMES', payload: json.user['wishlist_games'] })
        dispatch({ type: 'ADD_SAVED_RECS_GAMES', payload: json.user['recced_games'] })
      })
  }
}

export function loginUser(formData) {
  return (dispatch) => {
    fetch('https://cors-anywhere.herokuapp.com/https://the-perfect-game-backend.herokuapp.com/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify({
        user: formData
      })
    })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: 'SET_USER', payload: {
          id: json.user.id,
          email: json.user.email,
          steam_name: json.user.steam_name,
          steam_id: json.user.steam_id
        } });
        dispatch({ type: 'ADD_USER_PLAYED_GAMES', payload: json.user['user_played_games'] })
        dispatch({ type: 'ADD_PLAYED_GAMES', payload: json.user['played_games']})
        dispatch({ type: 'ADD_OWNED_GAMES', payload: json.user['owned_games'] })
        dispatch({ type: 'ADD_WISHLIST_GAMES', payload: json.user['wishlist_games'] })
        dispatch({ type: 'ADD_SAVED_RECS_GAMES', payload: json.user['recced_games'] })
      })
  }
}

export function getUser() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({ type: 'GET_USER_REQUEST' });
    fetch('https://the-perfect-game-backend.herokuapp.com/api/v1/profile', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'SET_USER', payload: {
          id: json.user.id,
          email: json.user.email,
          steam_name: json.user.steam_name,
          steam_id: json.user.steam_id
        } });
        dispatch({ type: 'ADD_USER_PLAYED_GAMES', payload: json.user['user_played_games'] })
        dispatch({ type: 'ADD_PLAYED_GAMES', payload: json.user['played_games']})
        dispatch({ type: 'ADD_OWNED_GAMES', payload: json.user['owned_games'] })
        dispatch({ type: 'ADD_WISHLIST_GAMES', payload: json.user['wishlist_games'] })
        dispatch({ type: 'ADD_SAVED_RECS_GAMES', payload: json.user['recced_games'] })
      });
  };
}

export const setUser = (userObj) => ({ type: "SET_USER", payload: userObj})

export const incrementSignupStep = () => ({ type: "INCREMENT_SIGNUP_STEP" })

export const decrementSignupStep = () => ({ type: "DECREMENT_SIGNUP_STEP" })

export const resetSignupStep = () => ({ type: "RESET_SIGNUP_STEP" })

export const resetUser = () => ({ type: "RESET_USER" })

export const userLogout = () => ({ type: "USER_LOGOUT" })