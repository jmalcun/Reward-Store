import React from 'react'
export const PageControl = ({currentPage, nextPage, previousPage}) => {
    
    return (
        
        <div className="page-control">
            <p>Number Page</p>
            
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
