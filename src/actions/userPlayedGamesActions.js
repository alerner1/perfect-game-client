export const addUserPlayedGames = (gamesArray) => ({ type: "ADD_USER_PLAYED_GAMES", payload: gamesArray })

export const changeUserPlayedGameLikeValue = (gameObj, liked) => ({ type: "CHANGE_USER_PLAYED_GAME_LIKE_VALUE", payload: {game: gameObj, liked: liked} })