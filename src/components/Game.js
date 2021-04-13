import React, { useEffect, useState } from 'react'
import cofre from '../assets/icons/treasure.svg'
import cofreAbierto from '../assets/icons/treasureOpen.svg'
import { calcularTotal } from '../helpers/calcularTotal'
import { randomNum } from '../helpers/random'

export const Game = ({counter, setCounter, setTotal}) => {

    const[abrir, setAbrir] = useState(false)

    const [vibrar, setVibrar] = useState({
        vibrar1:null,
        vibrar2:null,
        vibrar3:null,
        vibrar4:null,
        vibrar5:null,
        vibrar6:null
    })
    const [chestOpen, setChestOpen] = useState({
        cofre1:false,
        cofre2:false,
        cofre3:false,
        cofre4:false,
        cofre5:false,
        cofre6:false
    })
    const [valor, setValor] = useState({
        valor1:0,
        valor2:0,
        valor3:0,
        valor4:0,
        valor5:0,
        valor6:0
    })

    const {cofre1,cofre2,cofre3,cofre4,cofre5,cofre6} = chestOpen
    const {valor1,valor2,valor3,valor4, valor5, valor6} = valor
    const {vibrar1,vibrar2,vibrar3,vibrar4,vibrar5,vibrar6} = vibrar

    const cambiarClassName = () => {
         return "chest animate__animated animate__shakeX"
    }

    const handleClick = ({target}) =>{
        if(counter < 2){
            setVibrar({
                ...vibrar,
                [target.id]: true
            })
            setTimeout(() => {
                setVibrar({
                    ...vibrar,
                    [target.id]: false
                })
                setChestOpen({
                    ...chestOpen,
                    [target.alt] : !abrir
                })
            }, 1000);
            setValor({
                ...valor,
                [target.name] : randomNum()
            })
        }
        setTimeout(() => {
            setCounter(counter+1)
        }, 1500);
    }

    useEffect(() => {
        setTotal(calcularTotal(valor))
    }, [valor])


    return (
        <div className="chest-grid animate__animated animate__fadeInUp">
                <div>
                    <p className="color-f1d87d">{(cofre1) &&valor1}</p>
                    <button 
                    className="btn-cofre" 
                    disabled={cofre1} 
                    onClick={(e) => handleClick(e)}
                   
                    >
                        <img 
                        name="valor1" 
                        className={(vibrar1) ?cambiarClassName() :"chest"}  
                        src={(cofre1) ?cofreAbierto :cofre} 
                        alt="cofre1"
                        id="vibrar1"
                        />
                    </button>
                </div>
                <div>
                    <p className="color-f1d87d">{(cofre2) &&valor2}</p>
                    <button 
                    className="btn-cofre"
                    disabled={cofre2} 
                    onClick={handleClick}
                  
                    >
                        <img 
                        name="valor2" 
                        className={(vibrar2) ?cambiarClassName() :"chest"}  
                        src={(cofre2) ?cofreAbierto :cofre} 
                        alt="cofre2"
                        id="vibrar2"
                        />
                    </button>
                </div>
                <div>
                    <p className="color-f1d87d">{(cofre3) &&valor3}</p>
                    <button 
                    className="btn-cofre" 
                    disabled={cofre3} 
                    onClick={handleClick}
                    >
                        <img 
                        name="valor3" 
                        className={(vibrar3) ?cambiarClassName() :"chest"} 
                        src={(cofre3) ?cofreAbierto :cofre} 
                        alt="cofre3"
                        id="vibrar3"
                        />
                    </button>
                </div>
                <div>
                    <p className="color-f1d87d">{(cofre4) &&valor4}</p>
                    <button 
                    className="btn-cofre" 
                    disabled={cofre4} 
                    onClick={handleClick}
                    >
                        <img 
                        name="valor4" 
                        className={(vibrar4) ?cambiarClassName() :"chest"} 
                        src={(cofre4) ?cofreAbierto :cofre} 
                        alt="cofre4"
                        id="vibrar4"
                        />
                    </button>  
                </div>
                <div>
                    <p className="color-f1d87d">{(cofre5) &&valor5}</p>
                    <button 
                    className="btn-cofre" 
                    disabled={cofre5} 
                    onClick={handleClick}
                    >
                        <img 
                        name="valor5" 
                        className={(vibrar5) ?cambiarClassName() :"chest"} 
                        src={(cofre5) ?cofreAbierto :cofre} 
                        alt="cofre5"
                        id="vibrar5"
                        />
                    </button>
                </div>
                <div>
                    <p className="color-f1d87d">{(cofre6) &&valor6}</p>
                    <button 
                    className="btn-cofre" 
                    disabled={cofre6} 
                    onClick={handleClick}
                    >
                        <img 
                        name="valor6" 
                        className={(vibrar6) ?cambiarClassName() :"chest"} 
                        src={(cofre6) ?cofreAbierto :cofre} 
                        alt="cofre6"
                        id="vibrar6"
                        />
                    </button>
                </div>   
      </div>
    )
}
