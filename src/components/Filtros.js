import React from 'react'
import arrowRight from '../assets/icons/arrow-right.svg'

export const Filtros = () => {


    return (
        <div className="filters-data">
            <div className="data-pagination">
                <div className="number-pagination">
                    <p className="ff-source-sans-pro">16 of 32 products</p>
                </div>
            </div>
            <div className="filters">
                <p className="ff-source-sans-pro">Sort by:</p>
                <button className="btn">Most recent</button>
                <button className="btn">Lowest price</button>
                <button className="btn">Highest price</button>
            </div>

            <img src={arrowRight} alt="flecha"/>
            
        </div>
    )
}
