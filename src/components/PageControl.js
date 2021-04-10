import React from 'react'
import { ButtonsNextPreious } from './ButtonsNextPreious'
export const PageControl = ({currentPage, nextPage, previousPage}) => {
    
    return (
        
        <div className="page-control">
            <p>Number Page</p>
            <ButtonsNextPreious currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} /> 
        </div>
    )
}
