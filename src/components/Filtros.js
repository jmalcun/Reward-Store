import React, { useContext } from 'react'
import { ButtonsNextPreious } from './ButtonsNextPreious'
import {ContextValues} from './Context'

export const Filtros = () => {

    const {indexOfLast, currentPage, nextPage, previousPage, filterPriceLowers, FilterPriceHighests} = useContext(ContextValues)

    

    return (
        <div className="filters-data">
            <div className="data-pagination">
                <div className="number-pagination">
                    <p className="ff-source-sans-pro">{indexOfLast} of 32 products</p>
                </div>
            </div>
            <div className="filters">
                <p className="ff-source-sans-pro">Sort by:</p>
                <button className="btn">Most recent</button>
                <button className="btn" onClick={filterPriceLowers}>Lowest price</button>
                <button className="btn" onClick={FilterPriceHighests}>Highest price</button>
            </div>
            <ButtonsNextPreious currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} />          
        </div>
    )
}
