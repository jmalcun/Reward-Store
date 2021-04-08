import React from 'react'
import spiner from '../assets/icons/loading.svg'
import { CardProduct } from './CardProduct'
import { PageControl } from './PageControl'

export const CardGrid = ({currentList, loading, currentPage, nextPage, previousPage}) => {

    
    
    return (
        <>
        <div className="card-grid">
            {
                (currentList.length !== 0 && !loading)
                    ?currentList.map( p => (
                        <CardProduct key={p._id} {...p} />
                    ))
                    :<img className="loading" src={spiner} />
            }
            
        </div>
        <PageControl currentPage={currentPage} loading={loading} nextPage={nextPage} previousPage={previousPage}/>
        </>

        
    )
}
