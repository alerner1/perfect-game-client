export const addWishlistGames = (gamesArray) => ({ type: "ADD_WISHLIST_GAMES", payload: gamesArray });

export const addWishlistGame = (gameObj) => ({ type: "ADD_WISHLIST_GAME", payload: gameObj })

export const markWishlistGameForDestruction = (gameObj) => ({ type: "MARK_WISHLIST_GAME_FOR_DESTRUCTION", payload: gameObj })

export function saveWishlistGames(gamesArray) {
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
          list: "wish",
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