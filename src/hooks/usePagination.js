import { useEffect, useState } from "react";
import { getProductsOrUser } from "../helpers/getProducts-user";


export const usePagination = () => {
    
    const [list, setList] = useState([]) 
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(16)
    const [loading, setLoding] = useState(false)

    useEffect(() => {
        getProductsOrUser("products")
            .then( p => setList(p))
    }, [])

    //Get current list
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const currentList = list.slice(indexOfFirst, indexOfLast);

    const nextPage = () => {
        setCurrentPage(currentPage +1)
        setLoding(true)
        setTimeout(() => {
            setLoding(false)
        }, 1500);
    }

    const previousPage = () => {
        setCurrentPage(currentPage -1)
        setLoding(true)
        setTimeout(() => {
            setLoding(false)
        }, 1500);
        
    }

    return [currentList, currentPage, indexOfLast, loading, nextPage, previousPage]

}