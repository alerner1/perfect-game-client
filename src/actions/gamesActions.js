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

// export function getSearchResults() {
//   return (dispatch) => {
    // somewhere here i gotta put in the call to the games controller that will get me the search results
//   }
// }