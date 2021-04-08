import React from 'react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'

export const PageControl = ({currentPage, nextPage, previousPage}) => {
    
    
    
    return (
        
        <div className="page-control">
            <p>Number Page</p>
            
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
