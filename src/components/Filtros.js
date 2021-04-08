import React from 'react'

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
                            <button 
                                onClick={previousPage} 
                                className="color-15dbff"
                            >
                                <i className="far fa-arrow-alt-circle-left color-darkgrey"></i>
                            </button>
                            <button 
                                disabled="true" 
                                onClick={nextPage} 
                            >
                                <i className="far fa-arrow-alt-circle-right"></i>
                            </button>
                        </div>
                        :<div className="page-control-buttons">  
                            <button 
                                disabled="true"  
                                onClick={previousPage}
                            >
                                <i className="far fa-arrow-alt-circle-left"></i>
                            </button>
                            <button 
                                onClick={nextPage}
                            >
                                <i className="far fa-arrow-alt-circle-right color-darkgrey"></i>
                            </button> 
                        </div>     
                }    
        </div>
    )
}
