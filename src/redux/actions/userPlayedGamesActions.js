export const addUserPlayedGames = (gamesArray) => ({ type: "ADD_USER_PLAYED_GAMES", payload: gamesArray })

export const changeUserPlayedGameLikeValue = (gameObj, liked) => ({ type: "CHANGE_USER_PLAYED_GAME_LIKE_VALUE", payload: {game: gameObj, liked: liked} })

export function saveUserPlayedGame(user_played_game) {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    fetch(`https://the-perfect-game-backend.herokuapp.com/api/v1/user_played_games/${user_played_game['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({user_played_game})
    })
    .then(resp => resp.json())
  }
}

export const markUserPlayedGameForDestruction = (gameObj) => ({ type: "MARK_USER_PLAYED_GAME_FOR_DESTRUCTION", payload: gameObj })