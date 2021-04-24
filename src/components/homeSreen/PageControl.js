import React, { useContext } from 'react'
import { ButtonsNextPreious } from './ButtonsNextPreious'
import { ContextValues } from '../context/Context'


export const PageControl = () => {
    
    const {list,currentPage} = useContext(ContextValues)

    return (
        
        <div className="page-control">
            <p>Page {(list.length > 16)?currentPage :1}</p>
            <ButtonsNextPreious /> 
        </div>
    )
}
