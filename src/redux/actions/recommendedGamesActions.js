export function getQuickRecommendations() {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    fetch('http://localhost:3000/api/v1/games/quick_recommendations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'ADD_RECOMMENDED_GAMES', payload: json })
      dispatch({ type: 'ADD_SHOW_GAME', payload: json[0] })
    })
  }
}