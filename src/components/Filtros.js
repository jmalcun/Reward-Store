import React from 'react'
import arrowRight from '../assets/icons/arrow-right.svg'
import arrowLeft from '../assets/icons/arrow-left.svg'

export const Filtros = ({indexOfLast, currentPage, nextPage, previousPage}) => {



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
                <button className="btn">Lowest price</button>
                <button className="btn">Highest price</button>
            </div>

            {
                    (currentPage > 1)
                            ?<div className="page-control-buttons">
                                <button onClick={previousPage} className="color-15dbff"><img src={arrowLeft} /></button>
                                <button disabled="true" onClick={nextPage} ><img src={arrowRight} /></button>
                            </div>
                            :<div className="page-control-buttons">  
                                <button disabled="true"  onClick={previousPage}><img src={arrowLeft}/></button>
                                <img src={arrowRight} onClick={nextPage}/>
                            </div>     
                }    
            
        </div>
    )
}
