import React, { useContext } from 'react'
import { ButtonsNextPreious } from './ButtonsNextPreious'
import { ContextValues } from './Context'


export const PageControl = () => {
    
    const {currentPage} = useContext(ContextValues)

    return (
        
        <div className="page-control">
            <p>Page {currentPage}</p>
            <ButtonsNextPreious /> 
        </div>
    )
}
