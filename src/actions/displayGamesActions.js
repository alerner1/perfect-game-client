export const addGame = (gameObj) => ({ type: "ADD_GAME", payload: gameObj})

export function getPopularGames() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/games/popular', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(games => {
        for (let game of games) {
          dispatch({ type: 'ADD_GAME', payload: game })
        }
      })
  }
}