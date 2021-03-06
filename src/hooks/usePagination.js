import { useEffect, useState } from "react";
import { FilterPriceHighest, FilterPriceLower } from "../helpers/FilterPrice";
import { getProductsOrUser } from "../helpers/getProducts-user";


export const usePagination = () => {
    
    const [list, setList] = useState([]) 
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(16)
    const [loading, setLoading] = useState(false)
    
    
    useEffect(() => {
        getProductsOrUser("products")
            .then( product => setList(product))
    }, [])

    //PAGINATION
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const currentList = list.slice(indexOfFirst, indexOfLast);

    //(Exports para las pruebas)
    const nextPage = () => {
        setCurrentPage(currentPage +1)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }

    const previousPage = () => {
        setCurrentPage(currentPage -1)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500); 
    }
    

    //FILTROS (Exports para las pruebas)   
    const filterPriceLowers = () => {
        setList(FilterPriceLower(list))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);   
    }

    const FilterPriceHighests = () => {
        setList(FilterPriceHighest(list))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500); 
    }

    return [list, setList, currentList, currentPage, indexOfLast, loading, setLoading, nextPage, previousPage, filterPriceLowers, FilterPriceHighests]
}