import React from 'react'

export const ButtonsNextPreious = ({currentPage, nextPage, previousPage}) => {


    return (
        (currentPage > 1)
            ?<div className="page-control-buttons">
                <button 
                    onClick={previousPage} 
                    className="color-15dbff"
                >
                    <i className="fas fa-chevron-left color-darkgrey"></i>
                </button>
                <button 
                    disabled={true} 
                    onClick={nextPage} 
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            :<div className="page-control-buttons">  
                <button 
                    disabled={true} 
                    onClick={previousPage}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    onClick={nextPage}
                >
                    <i className="fas fa-chevron-right color-darkgrey"></i>
                </button> 
            </div>     
    )
}
