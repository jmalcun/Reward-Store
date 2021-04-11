import React, { useContext, useEffect, useState } from 'react'
import spiner from '../assets/icons/loading.svg'
import { Game } from './Game'
import { GameResult } from './GameResult'

export const ChestGame = ({setStartGame}) => {

    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
   
    useEffect(() => {
        if(counter === 2){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1800);
        }
    }, [counter])

    return (
        <>
        {
            ( counter < 2 )
                ?<Game counter={counter} setCounter={setCounter} setTotal={setTotal} />
                :(!loading)
                    ?<GameResult total={total} setStartGame={setStartGame}/>
                    :<div className="loading-result">
                        <img className="loading margin-0-auto" src={spiner} alt="loading"/>
                    </div>
                    
        
        }
        </>
    )
}
/*<div className="chest-grid animate__animated animate__fadeInUp">
            <div>
                <p className="color-f1d87d">{(cofre1) &&valor1}</p>
                <img name="valor1" className={cambiarClassName()} onClick={(e) => handleClick(e)} src={(cofre1) ?cofreAbierto :cofre} alt="cofre1"/>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre2) &&valor2}</p>
                <img name="valor2" className={cambiarClassName()} onClick={handleClick} src={(cofre2) ?cofreAbierto :cofre} alt="cofre2"/>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre3) &&valor3}</p>
                <img name="valor3" className={cambiarClassName()} onClick={handleClick} src={(cofre3) ?cofreAbierto :cofre} alt="cofre3"/>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre4) &&valor4}</p>
                <img name="valor4" className={cambiarClassName()} onClick={handleClick} src={(cofre4) ?cofreAbierto :cofre} alt="cofre4"/>  
            </div>
            <div>
                <p className="color-f1d87d">{(cofre5) &&valor5}</p>
                <img name="valor5" className={cambiarClassName()} onClick={handleClick} src={(cofre5) ?cofreAbierto :cofre} alt="cofre5"/>
            </div>
            <div>
                <p className="color-f1d87d">{(cofre6) &&valor6}</p>
                <img name="valor6" className={cambiarClassName()} onClick={handleClick} src={(cofre6) ?cofreAbierto :cofre} alt="cofre6"/>
            </div>   
          </div> */