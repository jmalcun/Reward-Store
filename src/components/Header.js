import React from 'react'
import headerImg from '../assets/imagenes/header-x1.png'

export const Header = () => {
    return (
        <div className="header">
            <div className="img-header">
                <img src={headerImg} alt="header"/>
            </div>
        </div>
    )
}
