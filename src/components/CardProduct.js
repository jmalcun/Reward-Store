import React from 'react'

export const CardProduct = ({name,cost,category, img}) => {
    
    const {url} = img
    
    return (
        <>
            <div className="card-product">
                <button className="shopping-button"><i className="fas fa-shopping-bag"></i></button>
                <div className="img-contain">
                    <img src={url}></img>
                </div>
                <div className="description">
                    <p className="type">{category}</p>
                    <p className="product-name">{name}</p>
                </div>
                <div className="priceAndBuy">
                    <div className="price">

                    </div>
                    <button className="buy-btn"></button>
                </div>
            </div>
        </>
    )
}
