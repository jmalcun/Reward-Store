import React, { useEffect, useState } from 'react'
import { getProductsOrUser } from '../helpers/getProducts-user'
import { CardProduct } from './CardProduct'
import { PageControl } from './PageControl'

export const CardGrid = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductsOrUser("products")
            .then( p => setProductos(p))
    }, [])
    

    return (
        <>
        <div className="card-grid">
            {
                (productos.length !== 0)
                    &&productos.map( p => (
                        <CardProduct key={p._id} {...p} />
                ))
            }
            
        </div>
        <PageControl />
        </>

        
    )
}
