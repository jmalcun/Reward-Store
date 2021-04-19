import React, { useContext, useEffect, useState } from 'react'
import { getProductsOrUser } from '../helpers/getProducts-user'
import { CardHistory } from './CardHistory'
import {ContextValues} from './Context'

export const Redeem = () => {
    
    const {user} = useContext(ContextValues)
    const {name,redeemHistory} = user

    const [historial, setHistorial] = useState([])
    
    console.log(historial)
    
    useEffect(() => {
        getProductsOrUser("history")
            .then(p => setHistorial(p))
    }, [redeemHistory])
    
    return (
        <>
            <h1 className="history-title"><span className="color-266894">{name}</span> welcome to your purchase history</h1>
            <div className="history-table">
                <div className="table">
                    <div className="table-item"><h2>Date</h2><i className="fas fa-calendar-alt color-15dbff"></i></div>
                    <div className="table-item"><h2>Category</h2><i className="fas fa-clipboard-list color-266894"></i></div> 
                    <div className="table-item"><h2>Name</h2><i className="fas fa-file-signature color-5c2da0"></i></div>
                    <div className="table-item"><h2>Price</h2><i className="fas fa-coins color-f1d87d"></i></div>
                    <div className="table-item"><h2>Image</h2><i className="far fa-file-image color-darkgrey"></i></div>
                </div>
                {
                    (historial.length > 0)
                        &&historial.map( p => (
                            <CardHistory key={Date.now()} {...p} />
                        )) 
                }
            </div>
        </>
    )
}
