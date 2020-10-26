export function getUser() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({ type: 'GET_USER_REQUEST' });
    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(json => dispatch({ type: 'SET_USER', payload: json.user }));
  };
}

export const setUser = (userObj) => ({ type: "SET_USER", payload: userObj})