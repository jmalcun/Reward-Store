import React, { useEffect, useState } from 'react'
import { ContextValues } from './context/Context'
import { AppRouter } from '../routes/AppRouter'
import { usePagination } from '../hooks/usePagination'
import { getProductsOrUser } from '../helpers/getProducts-user'

export const MainApp = () => {

    const [list, setList, currentList, currentPage, indexOfLast, loading, setLoading,  nextPage, previousPage, filterPriceLowers, FilterPriceHighests] = usePagination()
    const [user, setUser] = useState({})

    useEffect(() => {
       getProductsOrUser("user")
            .then( userInfo => setUser(userInfo))
    }, [])
    
    return (
        <ContextValues.Provider value={{
            user,
            setUser,
            list,
            setList,
            currentList,
            currentPage,
            indexOfLast,
            loading,
            setLoading,
            nextPage,
            previousPage,
            filterPriceLowers,
            FilterPriceHighests
        }}>
            <AppRouter />
        </ContextValues.Provider>
    )
}
