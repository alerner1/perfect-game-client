export const addWishlistGames = (gamesArray) => ({ type: "ADD_WISHLIST_GAMES", payload: gamesArray });

export const addWishlistGame = (gameObj) => ({ type: "ADD_WISHLIST_GAME", payload: gameObj })

export function saveWishlistGames(gamesArray) {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    for (let game of gamesArray) {
      fetch('http://localhost:3000/api/v1/user_games', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          game_id: game['id'],
          list: "wish",
          game: {
            igdb_id: game['id'],
            name: game['name'],
            cover_url: (game['cover'] && game['cover']['url']) || game['cover_url'],
            release_date: game['first_release_date'],
            platforms: game['platforms']
          }
        })
      })
        .then(resp => resp.json())
        .then(console.log)
    }
  }
}