import React, { useEffect, useState } from 'react'
import { ContextValues } from './Context'
import { AppRouter } from '../routes/AppRouter'
import { usePagination } from '../hooks/usePagination'
import { getProductsOrUser } from '../helpers/getProducts-user'

export const MainApp = () => {

    const [currentList, currentPage, indexOfLast, loading,  nextPage, previousPage, filterPriceLowers, FilterPriceHighests] = usePagination()
    
    const [user, setUser] = useState({})

    useEffect(() => {
       getProductsOrUser("user")
            .then( u => setUser(u))
    }, [])

    return (
        <ContextValues.Provider value={{
            user,
            setUser,
            currentList,
            currentPage,
            indexOfLast,
            loading,
            nextPage,
            previousPage,
            filterPriceLowers,
            FilterPriceHighests
        }}>
            <AppRouter />
        </ContextValues.Provider>
    )
}