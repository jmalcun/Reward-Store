import React, { useEffect } from 'react'
import homerHappy from '../assets/imagenes/homer-happy.jpg'

export const GameResult = ({total, setStartGame}) => {

    useEffect(() => {
        setTimeout(() => {
            setStartGame(false) 
        }, 7000);
    }, [])


    return (
        <div>
            {
                (total > 0)
                    ?<div className="result-div">
                        <div className="img-result-cotain">
                            <img src={homerHappy}></img>
                        </div>
                        <h1>congratulations you added {total} points</h1>

                    </div>
                    :<div className="result-div">
                        
                        <h1>you have not added coins, try it next week</h1>
                    </div>
            }
            
        </div>
    )
}
