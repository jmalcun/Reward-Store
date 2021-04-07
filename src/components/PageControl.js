import React from 'react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'

export const PageControl = () => {
    
    
    
    return (
        
        <div className="page-control">
            <p>Number Page</p>
            <div className="page-control-buttons">
                    <img src={arrowLeft} />
                    <img src={arrowRight} />
            </div>    
        </div>
    )
}
