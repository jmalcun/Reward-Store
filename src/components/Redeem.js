import React, { useContext } from 'react'
import { CardHistory } from './CardHistory'
import {ContextValues} from './Context'

export const Redeem = () => {
    
    const {user} = useContext(ContextValues)
    
    const {name,redeemHistory} = user
    
    let history10=[]
    if(redeemHistory !== undefined){
        history10 = redeemHistory.slice(1,10)
    }
    
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
                    (history10.length > 0)
                        &&history10.map( p => (
                            <CardHistory key={p._id} {...p} />
                        )) 
                }
            </div>
        </>
    )
}
