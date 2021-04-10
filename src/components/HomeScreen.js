import React from 'react'
import { CardGrid } from './CardGrid'
import { Filtros } from './Filtros'
import { Header } from './Header'

export const HomeScreen = () => {

    

    return (
        <>
            <div className="container">
                <Header />
                <Filtros />
                <CardGrid />
            </div>  
        </>
    )
}
