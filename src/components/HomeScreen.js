import React from 'react'
import { usePagination } from '../hooks/usePagination'
import { CardGrid } from './CardGrid'
import { Filtros } from './Filtros'
import { Header } from './Header'

export const HomeScreen = () => {

    const [currentList, currentPage, indexOfLast, loading,  nextPage, previousPage] = usePagination()

    return (
        <>
            <div className="container">
                <Header />
                <Filtros 
                    indexOfLast={indexOfLast} 
                    currentPage={currentPage} 
                    nextPage={nextPage} 
                    previousPage={previousPage}
                />
                <CardGrid 
                    currentList={currentList} 
                    loading={loading} 
                    currentPage={currentPage} 
                    nextPage={nextPage} 
                    previousPage={previousPage} 
                />
            </div>  
        </>
    )
}
