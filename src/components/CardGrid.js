import React, { useContext, useState } from 'react'
import spiner from '../assets/icons/loading.svg'
import { CardProduct } from './CardProduct'
import { ContextValues } from './Context'
import { PageControl } from './PageControl'

export const CardGrid = () => {

    const {list,currentList, loading} = useContext(ContextValues)
    const [loadingMousse, setLoadingMousse] = useState(false)
    
    return (
        <>
        <div className={(loadingMousse) ?"card-grid cursor-wait" :"card-grid"}>
            {
                (list.length === 32)
                    ?(currentList.length !== 0 && !loading)
                        ?currentList.map( p => (
                            <CardProduct key={p._id} {...p} loadingMousse={loadingMousse} setLoadingMousse= {setLoadingMousse}/>
                        ))
                        :<img className="loading" src={spiner} alt="loading"/>
                    : (list.length !== 0 && !loading)
                        ?list.map( p => (
                            <CardProduct key={p._id} {...p} loadingMousse={loadingMousse} setLoadingMousse={setLoadingMousse}/>
                        ))
                        :<img className="loading" src={spiner} alt="loading"/>   
            }
            
        </div>
        <PageControl />
        </>

        
    )
}

