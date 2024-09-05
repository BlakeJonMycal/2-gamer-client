import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const GameDetails = () => {
    const { gameId } = useParams()
    const [game, setGame] = useState(null)
    const navigate = useNavigate()

    const getGameDetailsFromAPI = async () => {
        const response = await fetch(`http://localhost:8000/games/${gameId}`, {
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("game_token")).token}`
            }
        })
        const parsedJSONString = await response.json()
        setGame(parsedJSONString)
    }
    useEffect(() => {
        getGameDetailsFromAPI()
    }, [gameId])



}