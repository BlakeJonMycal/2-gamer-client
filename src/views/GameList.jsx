import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Games = () => {
    const [gamesList, setGameList] = useState ([])

    const getGamesFromAPI = async () => {
        const response = await fetch("http://localhost:8000/games", {
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rater_token")).token}`
            }
        })
        const parsedJSONString = await response.json()
        setGameList(parsedJSONString)
    }
    useEffect(() => { getGamesFromAPI() }, [])

    const displayGames = () => {
        if (gamesList && gamesList.length) {
            return gamesList.map(game => (
              <div key={`key-${game.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
                <div>
                    <Link to={`/games/${game.id}`}className="text-blue-500 hover:underline">
                        {game.title}
                    </Link>
                </div>
              </div>  
            ))
        }
    }
    return (
        <>
            <h1 className="text-3xl">List of Games</h1>
            {displayGames()}
        </>
    )
}



