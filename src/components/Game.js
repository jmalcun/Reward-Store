import React, { useEffect, useState } from 'react'
import cofre from '../assets/icons/treasure.svg'
import cofreAbierto from '../assets/icons/treasureOpen.svg'
import { calcularTotal } from '../helpers/calcularTotal'
import { randomNum } from '../helpers/random'

export const Game = ({counter, setCounter, setTotal}) => {

    const [vibrar, setVibrar] = useState(null)
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

    const cambiarClassName = () => {
        if(vibrar){
            return "chest animate__animated animate__shakeX"
        }    
        return "chest"

    }

    const handleClick = ({target}) =>{
        if(counter < 2){
            setVibrar(true)
            setTimeout(() => {
                setVibrar(false)
                setChestOpen({
                    ...chestOpen,
                    [target.alt] : !vibrar
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
                        className={cambiarClassName()}  
                        src={(cofre1) ?cofreAbierto :cofre} 
                        alt="cofre1"
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
                        className={cambiarClassName()}  
                        src={(cofre2) ?cofreAbierto :cofre} 
                        alt="cofre2"
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
                        className={cambiarClassName()} 
                        src={(cofre3) ?cofreAbierto :cofre} 
                        alt="cofre3"
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
                        className={cambiarClassName()} 
                        src={(cofre4) ?cofreAbierto :cofre} 
                        alt="cofre4"
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
                        className={cambiarClassName()} 
                        src={(cofre5) ?cofreAbierto :cofre} 
                        alt="cofre5"
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
                        className={cambiarClassName()} 
                        src={(cofre6) ?cofreAbierto :cofre} 
                        alt="cofre6"
                        />
                    </button>
                </div>   
      </div>
    )
}
