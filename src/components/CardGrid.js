import React, { useContext } from 'react'
import spiner from '../assets/icons/loading.svg'
import { CardProduct } from './CardProduct'
import { ContextValues } from './Context'
import { PageControl } from './PageControl'

export const CardGrid = () => {

    const {currentList, loading, currentPage, nextPage, previousPage} = useContext(ContextValues)
    
    return (
        <>
        <div className="card-grid">
            {
                (currentList.length !== 0 && !loading)
                    ?currentList.map( p => (
                        <CardProduct key={p._id} {...p} />
                    ))
                    :<img className="loading" src={spiner} alt="loading"/>
            }
            
        </div>
        <PageControl currentPage={currentPage} loading={loading} nextPage={nextPage} previousPage={previousPage}/>
        </>

        
    )
}
