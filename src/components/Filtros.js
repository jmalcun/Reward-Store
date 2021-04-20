import React, { useContext, useEffect, useState } from 'react'
import { filterCategory } from '../helpers/filterCategory'
import { ButtonsNextPreious } from './ButtonsNextPreious'
import {ContextValues} from './Context'
import celu from '../assets/icons/smartphone.svg'
import tele from '../assets/icons/television.svg'
import juego from '../assets/icons/game-controller.svg'

export const Filtros = () => {

    const {list, setList, setLoading, indexOfLast, filterPriceLowers, FilterPriceHighests} = useContext(ContextValues)

    const [category, setCategory] = useState(undefined)
    const [todos, setTodos] = useState([])
    const [selectList, setSelectList] = useState(false)

    useEffect(() => {
        if(list.length === 32){
            setTodos(list)
        }
    }, [list])

    const handleChange = ({target}) => {
        
    }

    const handleClick = () =>{
        setSelectList(!selectList)
    }

    useEffect(() => {
        if(category !== undefined){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setList(filterCategory(todos,category))
            }, 1500);
            
        } 
    }, [category])
    
    const clickValue = ({target}) =>{
        setCategory(target.value)
    }
    

    return (
        <div className="filters-data">
            <div className="data-pagination">
                <div className="number-pagination">
                    <p className="ff-source-sans-pro">{(list.length===32)?indexOfLast :list.length} of {list.length} products</p>
                </div>
            </div>
            <div className="filters">
                <p className="ff-source-sans-pro sort-by">Sort by:</p>
                <div className="btn background-15dbff " onClick={handleClick}> <p className="ff-source-sans-pro cat">Category</p><i className={(selectList)?"fas fa-chevron-down arrow" :"fas fa-chevron-left arrow"}></i>
                    <ul className={(selectList) ?"listStyle" :"display-none"}>
                        <li name="hola">
                            <option value="todos" onClick={clickValue}>All </option>
                            <i className="fas fa-border-all margin-right-3" ></i>
                        </li>
                        <li>
                            <option value="Tablets" onClick={clickValue}>Tablets </option>
                            <i className="fas fa-tablet-alt margin-right-3"></i>
                            
                        </li>
                        <li>
                            <option value="Computing" onClick={clickValue}>Computing </option>
                            <i className="fas fa-laptop"></i>    
                        </li>
                        <li >
                            <option value="Phones" onClick={clickValue}>Phones </option>
                            <i className="fas fa-mobile-alt margin-right-5"></i>
                        </li>
                        <li >
                            <option value="Gaming" onClick={clickValue}>Gaming </option>
                            <i className="fas fa-gamepad"></i>
                        </li>
                        <li>
                            <option value="Audio" onClick={clickValue}>Audio </option>
                            <i className="fas fa-headphones-alt margin-right-3"></i>
                        </li>
                        
                    </ul>
                    
                </div>
                <button className="btn background-d8d7d7" onClick={filterPriceLowers}>Lowest price</button>
                <button className="btn background-d8d7d7" onClick={FilterPriceHighests}>Highest price</button>
                <img className="celu" src={celu} alt="celu"/>
                <img className="tele" src={tele} alt="tele"/>
                <img className="juego" src={juego} alt="juego"/>
            </div>
            <ButtonsNextPreious/>          
        </div>
    )
}
/*<select className="btn background-d8d7d7 select" value={category} onChange={handleChange}>
                    <option value="todos">Category</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Computing">Computing</option>
                    <option value="Phones">Phones</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Audio">Audio</option>
                    <option value="Drones">Drones</option>
                </select> */