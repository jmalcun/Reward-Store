import React, { useContext, useState } from 'react'
import spiner from '../../assets/icons/loading.svg'
import { CardProduct } from './CardProduct'
import { ContextValues } from '../context/Context'
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
                        ?currentList.map( product => (
                            <CardProduct key={product._id} {...product} loadingMousse={loadingMousse} setLoadingMousse= {setLoadingMousse}/>
                        ))
                        :<img className="loading animation-girar" src={spiner} alt="loading"/>
                    : (list.length !== 0 && !loading)
                        ?list.map( product => (
                            <CardProduct key={product._id} {...product} loadingMousse={loadingMousse} setLoadingMousse={setLoadingMousse}/>
                        ))
                        :<img className="loading animation-girar" src={spiner} alt="loading"/>   
            }
            
        </div>
        <PageControl />
        </>

        
    )
}

