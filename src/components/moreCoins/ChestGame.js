import React, { useEffect, useState } from 'react'
import spiner from '../../assets/icons/loading.svg'
import { calcularTotal } from '../../helpers/calcularTotal'
import { Game } from './Game'
import { GameResult } from './GameResult'

export const ChestGame = ({setStartGame}) => {

    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
    const [valor, setValor] = useState({
        valor1:0,
        valor2:0,
        valor3:0,
        valor4:0
    })
    
   
    useEffect(() => {
        if(counter === 2){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1800);
            setTotal(calcularTotal(valor))
        }
    }, [counter,valor])

    return (
        <>
        {
            ( counter < 2 )
                ?<Game counter={counter} setCounter={setCounter} valor={valor} setValor={setValor} />
                :(!loading)
                    ?<GameResult total={total} setStartGame={setStartGame}/>
                    :<div className="loading-result">
                        <img className="loading margin-0-auto animation-girar" src={spiner} alt="loading"/>
                    </div>
                    
        
        }
        </>
    )
}
