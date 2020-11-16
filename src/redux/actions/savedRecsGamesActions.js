export const addSavedRecsGames = (gamesArray) => ({ type: "ADD_SAVED_RECS_GAMES", payload: gamesArray });

export const addSavedRecsGame = (gameObj) => ({ type: "ADD_SAVED_RECS_GAME", payload: gameObj })

export const markSavedRecsGameForDestruction = (gameObj) => ({ type: "MARK_SAVED_RECS_GAME_FOR_DESTRUCTION", payload: gameObj })

export function saveSavedRecsGames(gamesArray) {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    for (let game of gamesArray) {
      fetch('https://the-perfect-game-backend.herokuapp.com/api/v1/user_games', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          // game_id: game['id'],
          list: "rec",
          game: {
            igdb_id: game['igdb_id'],
            name: game['name'],
            cover_url: game['cover_url'],
            release_date: game['first_release_date'],
            platforms: game['platforms']
          }
        })
      })
        .then(resp => resp.json())
        .then(json => {
          if (game.destroy === true) {
            fetch(`https://the-perfect-game-backend.herokuapp.com/api/v1/user_games/${json.id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
              }
            })
            .then(resp => resp.json())
            .then(console.log('baleeted'))
          }
        })
    }
  }
}