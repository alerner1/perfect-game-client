export function createUser(formData) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
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
        dispatch({ type: 'SET_USER', payload: json.user });
        dispatch({ type: 'INCREMENT_SIGNUP_STEP'});
      })
  }
}

export function loginUser(formData) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
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
        dispatch({ type: 'SET_USER', payload: json.user })
      })
  }
}

export function getUser() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({ type: 'GET_USER_REQUEST' });
    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'SET_USER', payload: json.user });
      });
  };
}

export const setUser = (userObj) => ({ type: "SET_USER", payload: userObj})

export const incrementSignupStep = () => ({ type: "INCREMENT_SIGNUP_STEP" })

export const decrementSignupStep = () => ({ type: "DECREMENT_SIGNUP_STEP" })

export const resetSignupStep = () => ({ type: "RESET_SIGNUP_STEP" })

export const resetUser = () => ({ type: "RESET_USER" })