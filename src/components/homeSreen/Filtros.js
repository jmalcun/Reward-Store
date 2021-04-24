import React, { useContext, useEffect, useState } from 'react'
import { filterCategory } from '../../helpers/filterCategory'
import { ButtonsNextPreious } from './ButtonsNextPreious'
import {ContextValues} from '../context/Context'
import celu from '../../assets/icons/smartphone.svg'
import tele from '../../assets/icons/television.svg'
import juego from '../../assets/icons/game-controller.svg'

export const Filtros = () => {

    const {list, setList, setLoading, indexOfLast, filterPriceLowers, FilterPriceHighests} = useContext(ContextValues)

    const [category, setCategory] = useState(undefined)
    const [todos, setTodos] = useState([])
    const [selectList, setSelectList] = useState(false)
    const [selectItem, setSelectItem] = useState("Category")

    useEffect(() => {
        if(list.length === 32){
            setTodos(list)
        }
    }, [list])

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
        setSelectItem(target.value)
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
                <div className="btn background-15dbff " onClick={handleClick}> <p className="ff-source-sans-pro cat">{(selectItem === "All") ?"Category" :selectItem}</p><i className={(selectList)?"fas fa-chevron-down arrow" :"fas fa-chevron-left arrow"}></i>
                    <ul className={(selectList) ?"listStyle" :"display-none"}>
                        <li name="hola">
                            <option value="All" onClick={clickValue}>All </option>
                            <option value="All" className="fa margin-right-3" onClick={clickValue}> &#xf84c; </option>
                        </li>
                        <li>
                            <option value="Tablets" onClick={clickValue}>Tablets </option>
                            <option value="Tablets" className="fa margin-right-3" onClick={clickValue}> &#xf3fa; </option>
                        </li>
                        <li>
                            <option value="Computing" onClick={clickValue}>Computing </option>
                            <option value="Computing" className="fa" onClick={clickValue}> &#xf109; </option> 
                        </li>
                        <li >
                            <option value="Phones" onClick={clickValue}>Phones </option>
                            <option value="Phones" className="fa margin-right-5" onClick={clickValue}> &#xf3cd; </option>
                        </li>
                        <li >
                            <option value="Gaming" onClick={clickValue}>Gaming </option>
                            <option value="Gaming" className="fa" onClick={clickValue}> &#xf11b; </option>
                        </li>
                        <li>
                            <option value="Audio" onClick={clickValue}>Audio </option>
                            <option value="Audio" className="fa margin-right-3" onClick={clickValue}> &#xf58f; </option>
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
