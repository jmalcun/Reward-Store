import React from 'react'
import headerImg from '../../assets/imagenes/header-x1.png'
import carrito from '../../assets/icons/trolley.svg'
import coin from '../../assets/icons/coin.svg'

export const Header = () => {
    return (
        <div className="header">
            <div className="img-header">
                <h1 className="title-page animate__animated animate__fadeInLeft animate__fast ">Welcome to <span className="animate__animated animate__zoomInUp animate__slower">Reward Store</span></h1>
                <img src={headerImg} alt="header"/>
                <img className="animation-carrito carrito" src={carrito} alt="carrito"/>
                
                <div className="div-coins animation-carrito">
                    <img className="coinn animation-girar" src={coin} alt="coin"/>
                    <img className="coinn animation-girar" src={coin} alt="coin"/>
                </div>
            </div>
        </div>
    )
}
