export const addGame = (gameObj) => ({ type: "ADD_GAME", payload: gameObj})

export const clearGames = () => ({ type: "CLEAR_GAMES" })

export const likeGame = (gameObj) => ({ type: "LIKE_GAME", payload: gameObj })

export const unlikeGame = (gameObj) => ({ type: "UNLIKE_GAME", payload: gameObj })

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

export const updateSearchQuery = (query) => ({ type: "UPDATE_SEARCH_QUERY", payload: query })

export function getSearchResults(query) {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    fetch('http://localhost:3000/api/v1/games/search', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        game: {
          query: query
        }
      })
    })
    .then(resp => resp.json())
    .then(console.log)
  }
}